package easy;
import java.util.*;

/**
 * @author suzekang
 * @Description
 * @create 2021-03-03 11:38 PM
 */
public class TwoNumSum {
    public static int[] twoNumberSum(int[] array, int targetSum) {
        // Write your code here.
        for(int i =0; i < array.length; i++){
            int firstNum = array[i];
            for(int j = (array.length-1); j>i; j--){
                int secondNum = array[j];
                if(firstNum + secondNum == targetSum){
                    return new int[]{firstNum,secondNum};
                }
            }
        }

        return new int[0];
    }
}

/*
*
* */