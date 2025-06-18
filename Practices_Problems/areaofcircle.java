import java.util.Scanner;
public class areaofcircle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float b = sc.nextFloat();
        float area = (float) (3.14*b*b);
        System.out.print(area);
    }
}
