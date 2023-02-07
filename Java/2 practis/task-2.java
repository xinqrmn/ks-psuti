import java.util.Scanner;

class Main {

    public static int getSumNumbers(int[] numbers){
        int sum = 0;
        for (int i = 0; i<numbers.length; i++){
            sum += numbers[i];
        }
        return sum;
    }
    
    public static double getSumNumbers(double[] numbers){
        double sum = 0;
        for (int i = 0; i<numbers.length; i++){
            sum += numbers[i];
        }
        return sum;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double[] numbers = new double[5];
        
      for (int i = 0; i<numbers.length; i++){
            numbers[i] = scanner.nextDouble();
        }
        System.out.println(getSumNumbers(numbers));

    }

}
