void main() {
  for (var i = 0; i < 10; i++) {
    print(i + 1);
  }
}

void main() {
  for (var i = 10; i >= 1; i--) {
    print(i);
  }
}

void main() {
  for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      print(i);
    }
  }
}

void main() {
  int number = 7;
  print('Tabuada do número $number:');
  for (int i = 1; i <= 10; i++) {
    final int result = number * i;
    print('$number x $i = $result');
  }
}


void main() {
  int sum = 0;
  final int limit = 10;
  for (int i = 1; i <= limit; i++) {
    sum += i;
  }
  print('A soma de todos os números de 1 até $limit é: $sum');
}

void main() {
  final String className = '3° B';
   int repeatCount = 5;
  for (int i = 1; i <= repeatCount; i++) {
    print('A turma $className está estudando Dart.');
  }
}


void main() {
  int start = -5;
  int end = 5;
  for (int i = start; i <= end; i++) {
    final String status;
    if (i > 0) {
      status = 'positivo';
    } else if (i < 0) {
      status = 'negativo';
    } else {
      status = 'zero';
    }
    print('O número $i é $status.');
  }
}


void main() {
  int counter = 1;
  int limit = 10;
  while (counter <= limit) {
    print('Número: $counter');
    counter++;
  }
}

void main() {
  int counter = 20;
  int limit = 10;
  while (counter >= limit) {
    print('Número: $counter');
    counter--;
  }
}

void main() {
  int currentNumber = 1;
  int sum = 0;
  final int limit = 5;
  while (currentNumber <= limit) {
    sum += currentNumber;
    currentNumber++;
  }
  print('O resultado da soma dos números de 1 a 5 é: $sum');
}


void main() {
  const c = {'admin': 'password123'};
  final i = [{'u': 'wrong', 'p': 'wrong'}, {'u': 'admin', 'p': 'password123'}];
  for (final e in i) {
    if (c[e['u']] == e['p']) {
      print('Login realizado com sucesso!');
      return;
    }
    print('login inválidas para: ${e['u']}');
  }
  print('Acesso negado.');
}

void main() {
  int stockQuantity = 10;
  final String productName = "Widget";
  print('Iniciando contagem de estoque para: $productName');
  print('Estoque inicial: $stockQuantity');
  print('------------------------------------');
  while (stockQuantity > 0) {
    print('Venda realizada. Estoque atual: $stockQuantity');
    stockQuantity--;
  }
  print('------------------------------------');
  print('Estoque de "$productName" esgotado (Total: $stockQuantity).');
}

void main() {
  int batteryLevel = 100;
  while (batteryLevel >= 0) {
    print('Nível de bateria: $batteryLevel%');
    if (batteryLevel == 0) {
      print('Dispositivo desligado.');
    }
    batteryLevel -= 10;
  }
}


void main() {
  const int maxUsers = 5;
  final List<String> userNames = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve'
  ];
  print('--- Início do Cadastro de Usuários (Total: $maxUsers) ---');
  int i = 0;
  while (i < maxUsers) {
    if (i < userNames.length) {
      final String name = userNames[i];
      final int count = i + 1;
      if (name.isNotEmpty) {
        print('Sucesso: Usuário #$count ($name) registrado.');
      } else {
        print('Erro: O nome do usuário na posição $count não pode ser vazio.');
      }
    } else {
      print('Erro: Nome de usuário não encontrado para o índice $i.');
    }
    i++;
  }
  print('--- Cadastro finalizado com sucesso! ---');
}

void main() {
  const int maxExecutions = 3;
  int counter = 0;
  print('--- Início da Execução ---');
  do {
    counter++;
    print('Executando o aplicativo... (Iteração: $counter)');
  } while (counter < maxExecutions);
  print('--- Execução finalizada com sucesso! ---');
}

import 'dart:io';
void main() {
  bool running = true;
  print('--- Bem-vindo ao Sistema ---');
  do {
    print('\nEscolha uma opção:');
    print('1 - Abrir perfil');
    print('2 - Ver mensagens');
    print('3 - Configurações');
    print('0 - Sair');
    stdout.write('Opção: ');
    final input = stdin.readLineSync();
    switch (input) {
      case '1':
        print('\n[Ação] Abrindo o perfil do usuário...');
        break;
      case '2':
        print('\n[Ação] Carregando mensagens recentes...');
        break;
      case '3':
        print('\n[Ação] Acessando menu de configurações...');
        break;
      case '0':
        print('\nSaindo do sistema. Até logo!');
        running = false;
        break;
      default:
        print('\nOpção inválida. Por favor, tente novamente.');
    }
  } while (running);
  print('--- Execução finalizada com sucesso! ---');
}
