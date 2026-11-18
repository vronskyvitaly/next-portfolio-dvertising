/**
 * Вывод JSON-LD одним тегом. Серверный компонент — разметка попадает
 * в HTML сразу, без ожидания гидратации.
 *
 * Символ `<` экранируется, как советует документация Next.js: иначе
 * строка вида `</script>` внутри данных закрыла бы тег раньше времени.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c')
      }}
    />
  )
}
