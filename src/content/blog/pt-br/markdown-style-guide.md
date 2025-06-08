---
title: "Guia de Estilo Markdown"
description: "Aqui estão alguns exemplos de elementos básicos de Markdown que podem ser usados ao escrever conteúdo Markdown no Astro."
pubDate: "Jul 01 2022"
heroImage: "../../../assets/blog-placeholder-1.jpg"
locale: "pt-br"
---

Aqui estão alguns exemplos de elementos básicos de Markdown que podem ser usados ao escrever conteúdo Markdown no Astro.

## Cabeçalhos

Os seguintes elementos HTML `<h1>`—`<h6>` representam seis níveis de cabeçalhos de seção. `<h1>` é o nível de seção mais alto, enquanto `<h6>` é o mais baixo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Parágrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Imagens

![Este é um placeholder de imagem](../../../assets/blog-placeholder-about.jpg)

## Citações

O elemento blockquote representa conteúdo que é citado de outra fonte, opcionalmente com uma citação que deve estar dentro de um elemento `footer` ou `cite`, e opcionalmente com mudanças inline como anotações e abreviações.

#### Blockquote sem atribuição

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Nota** que você pode usar _sintaxe Markdown_ dentro de um blockquote.

#### Blockquote com atribuição

> Não se comunique compartilhando memória, compartilhe memória comunicando-se.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: A citação acima é extraída da [palestra](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante o Gopherfest, 18 de novembro de 2015.

## Tabelas

| Itálico   | Negrito     | Código   |
| --------- | ----------- | -------- |
| _itálico_ | **negrito** | `código` |

## Código

### Código Inline

`Este é código inline` com crases.

### Blocos de Código

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <title>Documento HTML de Exemplo</title>
  </head>
  <body>
    <p>Teste</p>
  </body>
</html>
```

## Tipos de Lista

### Lista Ordenada

1. Primeiro item
2. Segundo item
3. Terceiro item

### Lista Não Ordenada

- Item da lista
- Outro item
- E outro item

### Lista Aninhada

- Fruta
  - Maçã
  - Laranja
  - Banana
- Laticínios
  - Leite
  - Queijo

## Outros Elementos — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> é um formato de imagem bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Pressione <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> para finalizar a sessão.

A maioria das <mark>salamandras</mark> são noturnas e caçam insetos, vermes e outras pequenas criaturas.
