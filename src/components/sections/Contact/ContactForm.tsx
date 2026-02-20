'use client';

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
      <textarea placeholder="Message" className="w-full p-3 border rounded" rows={5} />
      <button type="submit" className="px-6 py-3 bg-primary text-white rounded">Send</button>
    </form>
  );
}
