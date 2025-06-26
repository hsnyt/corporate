import { FC, useState } from 'react';

const Contact: FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // 送信ボタン押下時にmailtoリンクを生成
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hoshinoyuta.jp@gmail.com?subject=お問い合わせ from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section className="px-6 py-32 bg-gradient-to-b from-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-6xl font-black mb-4">Contact</h3>
        <p className="text-lg md:text-2xl mb-8 text-gray-300 max-w-4xl">
        </p>
        <form onSubmit={handleSend} className="space-y-6 max-w-lg">
          <input
            type="text"
            placeholder="yourname"
            className="w-full p-3 rounded bg-gray-800 text-white"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            required
            placeholder="message"
            className="w-full p-3 rounded bg-gray-800 text-white"
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black font-bold py-2 px-6 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 