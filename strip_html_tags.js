const strip_html_tags = str => str.replace(/<[^>]*>/g, '')

console.log(strip_html_tags('<p>Hello</p>'))