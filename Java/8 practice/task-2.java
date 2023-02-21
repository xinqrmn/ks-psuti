import java.util.Random;
public class Main {
    public static void main(String[] args) {

        int r=0,Row=8,c=0,Col=8,Cmax=0,Rmax=0,Mmax=0; // Переменные типа int
        Row = 4; // Число строк матрицы, нумерация с 0
        Col = 4; // Число столбцов матрицы, нумерация с 0
        int [][] M = new int [Row][Col]; // Матрица M[Row,Col] типа int
        for (r = 0; r<Row; r++) { // Создание матрицы
            for (c = 0; c<Col; c++) {
                // Генерация случайного целого
                Random Rnd = new Random(); // Генератор случайных чисел
                M[r][c] = Rnd.nextInt(100); // Случайное целое 0...100 в матрицу
                if (M[r][c] >Mmax) { // Обнаружение максимума
                    Mmax = M[r][c]; // Значение максимума
                    Rmax = r; // Номер строки
                    Cmax = c; // Номер столбца
                }
            }
        }

        // Выводим результаты
        System.out.println("Матрица M[Row,Col] случайных целых чисел");
        for (r=0; r<Row; r++) {
            for (c=0; c<Col; c++) {
                System.out.printf("%d ",M[r][c]); // Строка с разделителями
            }
            System.out.println();
        }

        System.out.println("Мmax= " + Mmax); // Вывод Mmax
        System.out.println("Rmax=" + Rmax); // Вывод Rmax
        System.out.println("Cmax= " + Cmax); // Вывод Cmax
    }
}
