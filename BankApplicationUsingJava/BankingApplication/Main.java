package BankingApplication;

import java.util.Scanner;

public class Main {
    public static class BankAccount{
        int balance;
        int previousTransaction;
        String customerName;
        String customerId;

        public BankAccount(String cName, String cId){
            // we will pass these things for the user's welcome
            this.customerName = cName;
            this.customerId = cId;
        }

        public void deposit(int amount){
            if(amount != 0){
                balance += amount;
                previousTransaction = amount;
            }
        }
        public void withdraw(int amount){
            if(amount != 0){
                balance -= amount;
                previousTransaction = -amount;
            }
        }
        public void getPreviousTransaction(){
            if(previousTransaction > 0){
                System.out.println("Deposited : " + previousTransaction);
            }else if(previousTransaction < 0){
                System.out.println("Withdrawn : " + Math.abs(previousTransaction));
            }else{
                System.out.println("No transaction occurred");
            }
        }
        public void showMenu(){
            char option = '\0';
            // this is nothing but only for initialization, like we use to initialize an int asa int a = 0 like that. We can do it with any other char as well
            Scanner sc = new Scanner(System.in);

            System.out.println("Welcome to JaiHo Bank");
            System.out.println("===============================================================");
            System.out.println("Customer Name - " + customerName);
            System.out.println("Customer Id - " + customerId);
            System.out.println();
            System.out.println("A, Check Balance");
            System.out.println("B, Deposit");
            System.out.println("C, Withdraw");
            System.out.println("D, Previous Transaction");
            System.out.println("E, Exit");

            do{
                System.out.println("===============================================================");
                System.out.println("Enter an Option");
                System.out.println("===============================================================");
                option = sc.next().charAt(0);
                System.out.println("\n");

                switch (option){
                    case 'A':
                        System.out.println("-----------------------------------");
                        System.out.println("Balance = " + balance);
                        System.out.println("-----------------------------------");
                        System.out.println("\n");
                        break;

                    case 'B':
                        System.out.println("-----------------------------------");
                        System.out.println("Enter an amount to deposit :");
                        System.out.println("-----------------------------------");
                        int amount = sc.nextInt();
                        deposit(amount);
                        System.out.println("\n");
                        break;

                    case 'C':
                        System.out.println("-----------------------------------");
                        System.out.println("Enter an amount to withdraw :");
                        System.out.println("-----------------------------------");
                        int amountWithdraw = sc.nextInt();
                        withdraw(amountWithdraw);
                        System.out.println("\n");
                        break;
                    case 'D':
                        System.out.println("-----------------------------------");
                        getPreviousTransaction();
                        System.out.println("-----------------------------------");
                        System.out.println("\n");
                        break;
                    case 'E':
                        System.out.println("You have done successfully exit");
                        break;
                    default :
                        System.out.println("Invalid Option! Please enter again.");
                        break;
                }
            }while (option != 'E');
            System.out.println("-----------------------------------");
            System.out.println("\n");
            System.out.println("Thank you for using our Service");
        }
    }


    public static void main(String[] args) {
      BankAccount customer1 = new BankAccount("Vikash Yadav", "XYZ34567");
      customer1.showMenu();
    }
}
