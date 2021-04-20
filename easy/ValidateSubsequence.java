package easy;

import java.util.List;

/**
 * @author suzekang
 * @Description
 * @create 2021-03-03 11:42 PM
 */

public class ValidateSubsequence {
    public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
        int arrIdx = 0;
        int seqIdx = 0;
        while (arrIdx < array.size()&&seqIdx <sequence.size()){
            if(array.get(arrIdx).equals(sequence.get(seqIdx))){
                seqIdx++;
            }
            arrIdx++;
        }
        return seqIdx == sequence.size();
    }
}
