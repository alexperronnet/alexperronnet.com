type TokenizedTextProps = React.ComponentPropsWithoutRef<'p'> & {
  format: string
  replacements: { [token: string]: React.ReactNode }
}

export function TokenizedText({ format, replacements, ...rest }: TokenizedTextProps) {
  const highlightedText: React.ReactNode[] = []

  let lastIndex = 0
  format.replace(/{{(.*?)}}/g, (match, name, index) => {
    if (index > lastIndex) {
      highlightedText.push(format.slice(lastIndex, index))
    }

    highlightedText.push(replacements[name] || match)

    lastIndex = index + match.length

    return match
  })

  if (lastIndex < format.length) {
    highlightedText.push(format.slice(lastIndex))
  }

  return <p {...rest}>{highlightedText}</p>
}
