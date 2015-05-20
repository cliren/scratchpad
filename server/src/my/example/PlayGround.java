package my.example;

import java.util.Arrays;
import java.util.Collections;

public class PlayGround {

    public static void main(String a[]) {
//        int[] numbers = {1, 2, 3, 4, 5, 6};
//        int first = 0,
//                last = numbers.length - 1,
//                middle = (first + last) / 2;
//
//        int search = 5;
//
//        while (first <= last) {
//            if (numbers[middle] < search) {
//                first = middle + 1;
//            } else if (numbers[middle] == search) {
//                System.out.println(middle);
//                break;
//            } else {
//                last = middle - 1;
//            }
//            middle = (first + last) / 2;
//        }


        int[] a1 = new int[]{1, 1, 2, 5, 2, 3, 3};
        System.out.println(singleNumber(a1));

//        System.out.println(findBits(5, 1));
//        System.out.println(4 ^ 3);
    }

    private static int findBits(int x, int y) {

        int bitCount = 0;

        int z = x ^ y;

        while (z != 0) {
            bitCount += z & 1;
            z = z >> 1;
        }

        return bitCount;
    }

    public static int singleNumber(int[] A) {
        int ans = A[0];
        for (int i = 1; i < A.length; i++) {
            System.out.println(A[i]);
            System.out.println(".....");
            ans = ans ^ A[i];
            System.out.println(ans);
        }
        return ans;
    }

}
