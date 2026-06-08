import Link from "next/link";

const posts = [
  {
    href: "/blog/avtomatizaciya-biznesa",
    tag: "Автоматизация",
    date: "8 июня 2026",
    readTime: "10 мин",
    title: "Автоматизация бизнеса: как убрать рутину и сосредоточиться на росте",
    excerpt:
      "Разбираю, что реально можно автоматизировать прямо сейчас — от приёма заявок до аналитики. Инструменты, примеры и пошаговый старт.",
  },
  {
    href: "/blog/kak-ustanovit-claude-code",
    tag: "Инструменты",
    date: "8 июня 2026",
    readTime: "7 мин",
    title: "Как установить Claude Code и начать работать: простая инструкция",
    excerpt:
      "Пошаговая инструкция для Mac, Windows и Linux. Простым языком, без технических терминов — от скачивания до первого запроса.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Полезный материал</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Пишу про автоматизацию, ботов и разработку — коротко и по делу
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    border: "1px solid rgba(125,44,200,0.35)",
                    background: "rgba(125,44,200,0.1)",
                    color: "#c084fc",
                  }}
                >
                  {post.tag}
                </span>
                <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500">
                  {post.date}
                </span>
                <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>

              <span className="inline-flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all">
                Читать
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
