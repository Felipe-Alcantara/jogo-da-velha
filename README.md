# Jogo da Velha — Obrigado por jogar 🎮

🎯 **Jogue agora (versão web):** https://felipe-alcantara.github.io/jogo-da-velha/  
Abra no navegador e comece a jogar com um clique — sem instalação necessária.

Uma versão leve e educativa do clássico Jogo da Velha (Tic-Tac-Toe), implementada com HTML, CSS e JavaScript puro. Projetada para ser simples, responsiva e fácil de testar no navegador.

---

## Demonstração

![Tabuleiro estático](./img/tictactoe.png)

![Em jogo](./img/playing.png)

---

## Recursos

- Jogo local para 2 jogadores (Humano vs Humano)
- Modo Humano vs Computador (CPU simples)
	- O CPU tenta primeiro ganhar, depois bloquear o jogador e, caso contrário, escolhe uma casa aleatória
- Escolha quem inicia: X, O ou Aleatório
- Interface minimalista, sem dependências externas — roda direto no navegador

## Tecnologias

- JavaScript (ECMAScript moderno)
- HTML5
- CSS3

---

## Como executar (localmente)

Há duas formas simples de abrir o jogo no seu computador:

1) Abrir diretamente no navegador

- Navegue até a pasta do projeto e dê um duplo clique em `index.html`.

2) Rodar a partir de um servidor local (recomendado durante desenvolvimento)

- Usando Python (funciona em macOS, Linux e Windows):

```cmd
cd caminho\para\o\projeto
python -m http.server 8000
```

ou, se preferir usar o launcher do Windows:

```cmd
py -m http.server 8000
```

Abra http://localhost:8000 no navegador.

---

## Como jogar vs CPU

1. No painel de controles selecione o modo "Humano vs Computador".
2. Escolha quem inicia (X, O ou Aleatório).
3. Clique em uma célula para jogar; quando for a vez do computador, ele fará um movimento automaticamente com um pequeno atraso para exibição.

Observação: o CPU implementado é uma estratégia simples (ganhar ➜ bloquear ➜ random). Se quiser um adversário mais forte, posso adicionar o algoritmo Minimax.

---

## Contribuição

Contribuições são bem-vindas! Se quiser ajudar:

1. Fork o repositório
2. Crie uma branch com sua feature: `git checkout -b minha-feature`
3. Faça suas alterações e commits
4. Abra um Pull Request descrevendo a mudança

Pequenas melhorias úteis: melhorar IA (Minimax), acessibilidade, testes automatizados e design responsivo.

---

## Licença

Projeto aberto — sinta-se livre para usar e adaptar. Se quiser, posso adicionar uma licença formal (MIT, Apache-2.0, etc.).

---

Se precisar, posso também:

- adicionar um README em inglês
- incluir badges (build/test/coverage)
- implementar um modo de IA mais forte (Minimax)

Obrigado por usar o projeto — se quiser que eu melhore ou adicione algo, diga o que deseja 😉