package my.example.collections;

public class LT {


    private static class Node {
        Node next;
        Node prev;
        Object data;

        public Node(Node prev, Object data, Node next) {
            this.prev = prev;
            this.data = data;
            this.next = next;
        }

        public Node getNext() {
            return next;
        }

        public void setNext(Node next) {
            this.next = next;
        }

        public Object getData() {
            return data;
        }

        public void setData(Object data) {
            this.data = data;
        }

        public Node getPrev() {
            return prev;
        }

        public void setPrev(Node prev) {
            this.prev = prev;
        }
    }

    private static class MyList {
        Node first;
        Node last;

        void addLast(Object e) {
            final Node l = last;
            final Node newNode = new Node(l, e, null);
            last = newNode;
            if (l == null) {
                first = newNode;
            } else {
                l.next = newNode;
            }

        }

        public boolean add(Object element) {
            addLast(element);
            return true;
        }

        public boolean remove(Object element) {
            if (element != null) {
                for (Node x = first; x != null; x = x.next) {
                    if (x.getData().equals(element)) {
                        removeElement(x);
                        return true;
                    }
                }
            }
            return false;
        }

        private Object removeElement(Node x) {
            Object data = x.getData();
            Node next = x.getNext();
            Node prev = x.getPrev();

            if (prev == null) {
                first = next;
            } else {
                prev.next = next;
                x.prev = null;
            }

            if (next == null) {
                last = prev;
            } else {
                next.prev = prev;
                x.next = null;
            }

            x.data = null;
            return data;

        }

        public Node getFirst() {
            return first;
        }

        public void setFirst(Node first) {
            this.first = first;
        }

        public Node getLast() {
            return last;
        }

        public void setLast(Node last) {
            this.last = last;
        }
    }

    public static void main(String args[]) {
        MyList list = new MyList();

        list.addLast("A");
        list.addLast("B");
        list.addLast("C");

        System.out.println(list.getLast().getData());
        System.out.println(list.remove("B"));

    }
}
