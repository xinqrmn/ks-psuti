import java.util.Scanner;

class HelloWorld {
  public static void main(String[] args) {
    
    Scanner input = new Scanner(System.in); 
    System.out.print("Длинна массива: ");
    int size = input.nextInt();
    
    int[] numArray = new int[size]; 
    System.out.println();
    System.out.println("Введите значений в массив: ");
    
    for (int i = 0; i < numArray.length; i++) {
      numArray[i] = input.nextInt();
    }

    int sum = 0;
    int proiz = 1;
    double average = 0;
    int max = numArray[0];
    int min = numArray[0];
    
    for (int i = 0; i < numArray.length; i++) {
      sum += numArray[i];
      proiz *= numArray[i];
      
      if (numArray[i] > max) {
        max = numArray[i];
      }
      
      if (numArray[i] < min) {
        min = numArray[i];
      }
    }
    average = sum / numArray.length;
    int rez = max - min;
    
    System.out.println();
    System.out.println("Среднее значение в массиве: " + average);
    System.out.println("Максимальное значение в массиве: " + max);
    System.out.println("Минимальное значение в массиве: " + min);
    System.out.println("Произведение всех значений в массиве: " + proiz);
    System.out.println("Сумма всех значений в массиве: " + sum);
    System.out.println("Разность самого наименьшего и наибольшего значения массива: " + rez);
    
    // int raz = 0;
    
    // for (int i = 0; i < numArray.length; i++) {
      //   raz = numArray[i] - raz;
      // }

    // System.out.println("Разность всех значений в массиве: " + raz);

    // System.out.println("Вывод значений массива: ");
    // for (int i = 0; i < numArray.length; i++) {
      //   System.out.println(numArray[i]);
      // }
    }
}