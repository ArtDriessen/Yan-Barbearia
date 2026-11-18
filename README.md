# Barbearia Yan Moreira

Site da Barbearia Yan Moreira (Ipanema, Pontal do Paraná - PR), feito em HTML, CSS e JavaScript puro. Não precisa de build: é só publicar os arquivos.

## O que tem no site
- Logo e apresentação
- Serviços
- Galeria de trabalhos (com ampliação ao tocar na foto)
- Agendamento pelo WhatsApp (o formulário abre o WhatsApp com a mensagem pronta)
- Localização com Google Maps
- Botões de WhatsApp e Instagram (no topo e flutuantes)

## Como editar
Todos os dados ficam em `js/config.js`: telefone, Instagram, endereço, lista de serviços e fotos da galeria.

Para adicionar uma foto, coloque o arquivo em `assets/img/` e inclua uma linha em `galeria` no `js/config.js`.

## Estrutura
```
index.html
css/style.css
js/config.js
js/main.js
assets/img/
```

## Hospedagem (Hostinger)
Site estático: publique a raiz do repositório como `public_html` (deploy via Git no hPanel ou envio dos arquivos pelo Gerenciador de Arquivos).
