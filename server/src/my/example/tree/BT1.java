package my.example.tree;

public class BT1 {

    private static class BT<T> {
        BT<T> left;
        BT<T> right;
        T value;

        public BT(T value) {
            this.value = value;
        }

        public BT<T> getLeft() {
            return left;
        }

        public void setLeft(BT<T> left) {
            this.left = left;
        }


        public BT<T> getRight() {
            return right;
        }

        public void setRight(BT<T> right) {
            this.right = right;
        }

        public T getValue() {
            return value;
        }

        public void setValue(T value) {
            this.value = value;
        }
    }

    public static void main(String args[]) {
        BT<Integer> root = new BT<Integer>(2);
        BT<Integer> a = new BT<Integer>(1);
        BT<Integer> b = new BT<Integer>(10);

        root.setLeft(a);
        root.setRight(b);

        System.out.println(lookup(root, 2));
        System.out.println(findLevel(root, 10, 1));
        System.out.println(isCousin(root, a, b));
        System.out.println(isSibling(root, a, b));
    }

    private static boolean isSibling(BT<Integer> root, BT<Integer> a, BT<Integer> b) {
        if (root == null) {
            return false;
        }
        return root.getLeft() == a && root.getRight() == b ||
                root.getLeft() == b && root.getRight() == a ||
                isCousin(root.getLeft(), a, b) ||
                isCousin(root.getRight(), a, b);

    }

    private static boolean isCousin(BT<Integer> root, BT<Integer> node1, BT<Integer> node2) {
        return findLevel(root, node1.getValue(), 1) == findLevel(root, node2.getValue(), 1) &&
                !isSibling(root, node1, node2);
    }

    private static boolean lookup(BT<Integer> root, int target) {
        if (root == null) {
            return false;
        } else {
            if (root.getValue() == target) {
                return true;
            } else {
                return target < root.getValue() ? root.getLeft().getValue() == target :
                        root.getRight().getValue() == target;
            }
        }
    }

    private static int findLevel(BT<Integer> node, int target, int level) {
        if (node == null) {
            return 0;
        }

        if (node.getValue() == target) {
            return level;
        } else {
            if (target < node.getValue()) {
                return findLevel(node.getLeft(), target, level + 1);
            } else {
                return findLevel(node.getRight(), target, level + 1);
            }
        }

    }
}
