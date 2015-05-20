package my.example.tree;

public class BinaryTreeTest {

    private static class Node<T> {
        Node<T> left;
        Node<T> right;
        T data;

        public Node(T data) {
            this.data = data;
        }

        public Node<T> getLeft() {
            return left;
        }

        public void setLeft(Node<T> left) {
            this.left = left;
        }

        public Node<T> getRight() {
            return right;
        }

        public void setRight(Node<T> right) {
            this.right = right;
        }

        public T getData() {
            return data;
        }

        public void setData(T data) {
            this.data = data;
        }
    }

    private static boolean lookup(Node<Integer> node, int target) {

        if (node == null) {
            return false;
        } else {
            if (node.getData() == target) {
                return true;
            } else {
                System.out.println(node.getData());
                return target < node.getData() ? lookup(node.getLeft(), target) :
                        lookup(node.getRight(), target);
            }
        }

    }

    private static void inorder(Node<?> n) {
        if (n != null) {
            inorder(n.getLeft());
            System.out.print(n.data + " ");
            inorder(n.getRight());
        }
    }


    public static void main(String a[]) {
        Node<Integer> two = new Node<Integer>(2);
        Node<Integer> one = new Node<Integer>(1);
        Node<Integer> ten = new Node<Integer>(10);

        two.setLeft(one);
        two.setRight(ten);

        System.out.println(lookup(two, 1));
        inorder(two);

    }
}
