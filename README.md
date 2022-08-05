# Desafio-TypeScript-DIO

Desafio de Projeto  [![img](https://camo.githubusercontent.com/17fd933e9619ef579f01fd761abcc696d2dad60bc5fc10d3d9c80c52ef38d82c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/17fd933e9619ef579f01fd761abcc696d2dad60bc5fc10d3d9c80c52ef38d82c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465)

Este repositório contém a resolução dos desafios propostos sobre TypeScript.

## Desafio 1:

O desafio foi resolvido de três maneiras diferentes:

1. Utilizando Interface;
2. Atribuição de tipos por inferência;
3. Atribuição antecipada dos tipos.

## Desafio 2:

Pontos importantes a serem citados durante a resolução:

1. Criado uma interface que contém todas as propriedades de Pessoa(nome, idade e profissão) com seus respectivos tipos;
2. Criado um enum  para atribuir profissões. 

## Desafio 3:

Pontos importantes a serem citados durante a resolução:

1. Atribuído 'as HTMLInputElement' à variável 'soma';
2. Para todos os itens que poderiam ser nulos, foi utilizado um 'if';
3. Na função 'somarSaldo' o tipo do parâmetro passado é number
4. Como a tag input retorna uma string, para operação '+' não resultar erroneamente em uma concatenação, o texto contido nela foi convertido em number. E após feita a soma, foi convertido em string novamente.