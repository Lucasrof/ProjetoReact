# <h1 align="center"> **CASSINO REACT** </h1>

## SOBRE O PROJETO:
### O projeto tem como fundamento a utilização da linguagem __React Native__ para desenvolvimento Mobile, para isso, desenvolvemos um aplicativo de "apostas" onde o usuário pode realizar apostas com dinheiro real em jogos como roleta, dados e cartas obtendo lucro caso ganhe sua aposta. Este projeto foi realizado como metodológia de aprendizado para a matéria de "Programação para dispositivos móveis em Android" no 2° semestre do ano de 2022.
OBS: Ressaltamos que tinhamos 0 conhecimento de ReactNative antes de iniciar o projeto.
## Pré-Requisitos:
Clone do Projeto:
```
https://github.com/Lucasrof/ProjetoReact.git
```
Após a clonagem execute.
```
npm install ou yarn install.
```
Comandos a serem executados no terminal:
```
npm install -g nodemon
npm install expo-cli -g
```
Para o pleno funcionamento da Roleta siga os passos abaixo:
Identifique a linha localizada no diretório - '\node_modules\react-native-casino-roulette'
```
let animation = Animated.timing(this.state._animatedValue, { toValue: nextItem, easing, duration })
```
Substitua por:
```
let animation = Animated.timing(this.state._animatedValue, { toValue: nextItem, easing, duration,useNativeDriver:true })
```
Crie um arquivo na pasta inicial com nome host.json
```
{
  "host": "ip onde esta seu banco de dados",
  "porta": número da porta,
  "database": "nome do banco de dados",
  "user": "login do banco de dados",
  "password": "senha do banco de dados"
}
```
Banco de dados utilizado no projeto foi o Mysql, siga os passos abaixo.
 Arquivo contendo a estrutura utilizada no BD >> SQL Structure Cassino.sql
```
npx expo start
```
Abra um novo terminal e execute:
```
npx nodemon controller.js
```
Utilize o emulador do expo ou seu celular via QrCode ou Ip fornecido no terminal para acessar o aplicativo. 
## IDEALIZADORES:
### Jackson Rodrigues, Marcos Vinicius, Ademivaldo Junior, Juliano Pereira, Fellipe Pereira e Lucas Rosa.
## Linguagens Utilizadas 👨‍💻:
1. ReactNative, 
2. NodeJS,
3. MySql,
4. Sqlite3.
## Tecnologias Utilizadas 👨‍💻:
1. Git,
2. GitHub,
3. PostMan,
4. Insomnia.
## Aprendizado adquirido durante desenvolvimento:
- ✔️ Trabalho em grupo e versionamento de códigos.
- ✔️ Configuração de ambiente de trabalho para desenvolvimento em ReactNative utilizando Expo-Cli.
- ✔️ Estruturação básica para desenvolvimento do código.
- ✔️ Desenvolvimento básico para dispositivos móveis em Android.
- ✔️ Utilização do emulado com AndroidStudio.
- ✔️ Integrações back-end com NodeJs.
## 🎁 Expressões de gratidão
### Agradecimento a todos os componentes do grupo pelo seu tempo dedicado aos estudos e esforços em "concluir" o aplicativo da melhor forma ao qual conseguimos. O código seguirá em aberto e alguns membros da equipe tem em mente a continuação do aplicativo a título de aprendizagem, afinal, sempre haverá melhorias a serem implementadas.




