import { FC, useState } from 'react';

const Blog: FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // 送信ボタン押下時にmailtoリンクを生成
    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        const mailto = `mailto:hoshinoyuta.jp@gmail.com?subject=お問い合わせ from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailto;
    };

    return (
        <section className="px-6 py-20">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl md:text-6xl font-black mb-4">Technical Blog</h3>
            </div>
            <div className="pt-20 flex items-center justify-center text-gray-400 text-xl">COMING SOON</div>
        </section>
    );
};

export default Blog;