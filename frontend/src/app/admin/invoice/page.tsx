'use client';

import React, { useState } from 'react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Printer, Send, FileText, CheckCircle } from 'lucide-react';

type InvoiceItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export default function InvoiceGenerator() {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  
  const [items, setItems] = useState<InvoiceItem[]>([
    { description: 'Standard Laundry (kg)', quantity: 0, unitPrice: 70 },
    { description: 'Ironing (per garment)', quantity: 0, unitPrice: 100 },
    { description: 'Duvets (each)', quantity: 0, unitPrice: 500 },
    { description: 'Shoes (per pair)', quantity: 0, unitPrice: 100 },
    { description: 'Carpets / Other', quantity: 0, unitPrice: 0 },
  ]);

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
  };

  const generatePDF = (action: 'download' | 'blob') => {
    const doc = new jsPDF();
    const total = calculateTotal();
    const date = new Date().toLocaleDateString();
    const branchName = 'Kimbo, Ruiru';
    
    // Header
    doc.setFontSize(24);
    doc.setTextColor(14, 165, 233); // Sky blue
    doc.text('PHONIX LAUNDRY', 14, 22);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(branchName, 14, 30);
    doc.text('Phone: 0729729347', 14, 35);
    doc.text(`Date: ${date}`, 14, 40);

    // Customer Info
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Bill To:', 14, 55);
    doc.setFontSize(10);
    doc.text(`Name: ${customerName || 'Valued Customer'}`, 14, 62);
    doc.text(`Phone: ${customerPhone || 'N/A'}`, 14, 67);
    if (customerEmail) doc.text(`Email: ${customerEmail}`, 14, 72);

    // Table Data
    const tableData = items
      .filter(item => item.quantity > 0)
      .map(item => [
        item.description,
        item.quantity.toString(),
        `Ksh ${item.unitPrice}`,
        `Ksh ${item.quantity * item.unitPrice}`
      ]);

    // @ts-ignore - jspdf-autotable attaches to jsPDF
    doc.autoTable({
      startY: 85,
      head: [['Description', 'Qty', 'Unit Price', 'Total']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [14, 165, 233] },
      foot: [['', '', 'Grand Total:', `Ksh ${total}`]],
      footStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0], fontStyle: 'bold' }
    });

    // Payment Instructions
    const finalY = (doc as any).lastAutoTable.finalY || 150;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Payment Instructions', 14, finalY + 20);
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Lipa na M-Pesa (Pochi La Biashara)', 14, finalY + 28);
    doc.text('Phone Number: 0729729347', 14, finalY + 34);
    doc.text('Name: Phonix Laundry', 14, finalY + 40);

    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text('Thank you for choosing Phonix Laundry!', 105, 280, { align: 'center' });

    if (action === 'download') {
      doc.save(`Phonix_Invoice_${customerName.replace(/\\s+/g, '_') || 'Customer'}.pdf`);
      return null;
    } else {
      return doc.output('blob');
    }
  };

  const handleSendInvoice = async () => {
    if (!customerPhone) {
      alert('Please enter a customer phone number.');
      return;
    }

    setIsSending(true);
    setSendStatus('idle');

    try {
      // Create a simplified text representation of the invoice for WhatsApp
      const activeItems = items.filter(i => i.quantity > 0);
      let textInvoice = `*PHONIX LAUNDRY INVOICE*\\n`;
      textInvoice += `Location: Kimbo, Ruiru\\n`;
      textInvoice += `Customer: ${customerName || 'Valued Customer'}\\n\\n`;
      
      activeItems.forEach(item => {
        textInvoice += `${item.quantity}x ${item.description}: Ksh ${item.quantity * item.unitPrice}\\n`;
      });
      
      textInvoice += `\\n*TOTAL: Ksh ${calculateTotal()}*\\n\\n`;
      textInvoice += `*Payment Details:*\\nLipa na M-Pesa (Pochi)\\nNumber: 0729729347\\nName: Phonix Laundry\\n\\nThank you for choosing us!`;

      // In a real production scenario with PDF upload, you would upload the Blob to Firebase Storage
      // and send the download URL via Twilio. For this implementation, we send the text invoice.
      
      const response = await fetch('/api/invoice/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: customerPhone,
          message: textInvoice,
          email: customerEmail,
        }),
      });

      if (response.ok) {
        setSendStatus('success');
      } else {
        const err = await response.json();
        console.error('Failed to send:', err);
        setSendStatus('error');
      }
    } catch (error) {
      console.error('Error sending invoice:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="mb-10 border-b border-surface-border pb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary-blue-light" />
              Invoice <span className="text-primary-blue-light">Generator</span>
            </h1>
            <p className="text-gray-400 mt-2">Create, download, and send professional invoices.</p>
          </div>
        </div>

        <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 md:p-8 shadow-2xl mb-8">
          <h2 className="text-xl font-bold text-white mb-6 border-b border-surface-border pb-2">Customer Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Customer Name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">WhatsApp Phone <span className="text-red-400">*</span></label>
              <input
                type="text"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="+254712345678"
                className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email (Optional)</label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mb-6 border-b border-surface-border pb-2">Invoice Items</h2>
          <div className="space-y-4 mb-8">
            {items.map((item, index) => (
              <div key={index} className="flex flex-wrap md:flex-nowrap items-center gap-4 bg-[#111] p-4 rounded-xl border border-gray-800">
                <div className="w-full md:w-1/2">
                  <span className="text-gray-300 font-medium">{item.description}</span>
                </div>
                <div className="w-1/2 md:w-1/6">
                  <label className="block text-xs text-gray-500 md:hidden mb-1">Quantity</label>
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 0)}
                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white outline-none focus:border-primary-blue"
                  />
                </div>
                <div className="w-1/2 md:w-1/6">
                  <label className="block text-xs text-gray-500 md:hidden mb-1">Unit Price</label>
                  <input
                    type="number"
                    min="0"
                    value={item.unitPrice}
                    onChange={(e) => handleItemChange(index, 'unitPrice', parseInt(e.target.value) || 0)}
                    className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white outline-none focus:border-primary-blue"
                  />
                </div>
                <div className="w-full md:w-1/6 text-right pt-2 md:pt-0">
                  <span className="text-primary-blue-light font-bold">Ksh {item.quantity * item.unitPrice}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-blue-dark/10 border border-primary-blue/30 rounded-xl p-6 flex justify-between items-center mb-8">
            <span className="text-xl text-white font-medium">Grand Total</span>
            <span className="text-3xl font-black text-primary-blue-light">Ksh {calculateTotal()}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={() => generatePDF('download')}
              className="px-6 py-3 bg-surface-border hover:bg-gray-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-5 h-5" />
              Download PDF
            </button>
            <button
              onClick={handleSendInvoice}
              disabled={isSending || calculateTotal() === 0}
              className={`px-6 py-3 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                calculateTotal() === 0
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-500 text-white shadow-[0_0_15px_rgba(22,163,74,0.4)]'
              }`}
            >
              {isSending ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : sendStatus === 'success' ? (
                <CheckCircle className="w-5 h-5 text-white" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {isSending ? 'Sending...' : sendStatus === 'success' ? 'Sent!' : 'Send WhatsApp'}
            </button>
          </div>
          {sendStatus === 'error' && (
            <p className="text-red-400 text-right mt-2 text-sm">Failed to send message. Check backend logs and Twilio config.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
