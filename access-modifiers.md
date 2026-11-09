Access Modifiers in TypeScript OOP – Public, Private, Protected and Readonly

Introduction
Object-Oriented Programming বা OOP-তে আমরা সাধারণত Class তৈরি করি। একটি Class-এর মধ্যে বিভিন্ন Property এবং Method থাকতে পারে। কিন্তু সব Property বা Method সবার জন্য উন্মুক্ত রাখা সবসময় ভালো সিদ্ধান্ত নয়।
ধরি আমি একটি Bank Account-এর Class তৈরি করব। সেখানে Account Holder-এর Name এবং Balance রয়েছে। এখন যদি বাইরের যেকোনো জায়গা থেকে কেউ ইচ্ছামতো Balance পরিবর্তন করতে পারে, তাহলে সেটি সমস্যার কারণ হতে পারে।
এই ধরনের পরিস্থিতি নিয়ন্ত্রণ করার জন্য TypeScript-এ Access Modifiers ব্যবহার করা হয়। এগুলোর মাধ্যমে আমরা ঠিক করতে পারি কোন Property বা Method কোথা থেকে ব্যবহার করা যাবে।

TypeScript এ আমাদের চারটি Access Modifiers হলো public, private, protected এবং readonly।

1. Public Modifier
public হলো TypeScript-এর Default Access Modifier। এর অর্থ হলো, কোনো Property বা Method Class-এর ভেতর থেকে, বাইরে থেকে এবং Child Class থেকেও ব্যবহার করা যাবে।
class User {
  public name: string = "Pronoy";

  public showName = () => {
    console.log(this.name);
  };
}

const user = new User();

console.log(user.name); // Pronoy
user.showName();        // Pronoy

এখানে name এবং showName() দুটোই Public। তাই আমরা Class-এর বাইরে থেকে এগুলো ব্যবহার করতে পারছি।
এক্ষেত্রে একটা জিনিস মনে রাখতে হবে, সেটি হলো যে কোনো Property বা Method-এর আগে public না লিখলেও সেটি Default হিসেবে Public থাকে।

2. Private Modifier
private ব্যবহার করলে কোনো Property বা Method শুধু নিজের Class-এর ভেতরেই ব্যবহার করা যায়। Class-এর বাইরে থেকে অথবা Child Class থেকে সরাসরি এটি Access করা যায় না।

class BankAccount {
  private balance: number = 5000;

  public showBalance = () => {
    console.log(this.balance);
  };
}

const account = new BankAccount();

account.showBalance(); // 5000

// Error
// console.log(account.balance);

এখানে balance Private হওয়ায় আমরা সরাসরি account.balance লিখে Access করতে পারব না। তবে Class-এর ভেতরে থাকা showBalance() Method-এর মাধ্যমে Balance দেখতে পারছি। কারণ সেটি Public।
Project-এ Sensitive Data বা Class-এর Internal Logic নিয়ন্ত্রণ করতে Private ব্যবহার করা হয়।

3. Protected Modifier
protected অনেকটা private-এর মতো। তবে এখানে একটি গুরুত্বপূর্ণ পার্থক্য রয়েছে। Protected Property নিজের Class-এর পাশাপাশি Child Class থেকেও Access করা যায়।
class Person {
  protected name: string = "Pronoy";
}

class Developer extends Person {
  public showName = () => {
    console.log(this.name);
  };
}

const developer = new Developer();

developer.showName(); // Pronoy

// Error
// console.log(developer.name);

এখানে Developer হলো Person-এর Child Class। তাই Developer-এর ভেতর থেকে name Access করা যাচ্ছে। কিন্তু Class-এর বাইরে থেকে সরাসরি Access করা যাচ্ছে না।

4. Readonly Modifier
readonly ব্যবহার করা হয় কোনো Property-এর Value পুনরায় পরিবর্তন করা থেকে আটকানোর জন্য।
ধরো, একজন User-এর Email একবার নির্ধারণ করার পর তুমি চাচ্ছো সেটি আর কেউ পরিবর্তন করতে পারবে না। তখন Readonly ব্যবহার করতে পারো।
class User {
  readonly email: string;

  constructor(email: string) {
    this.email = email;
  }
}

const user = new User("pronoy@example.com");

console.log(user.email);

// Error
// user.email = "new@example.com";

এখানে Constructor-এর মাধ্যমে Email সেট করা হয়েছে। এরপর নতুন করে Email Assign করতে গেলে TypeScript Error দেখাবে।

N:B: Readonly মানে Property দেখা যাবে না, এমন নয়। Property-এর Value পড়া যাবে, কিন্তু পুনরায় Assign করা যাবে না। এটি মূলত Compile-time Type Checking-এর মাধ্যমে নিশ্চিত করা হয়।

Conclusion
সবশেষে, চারটি Modifier-এর কাজ আলাদা হলেও উদ্দেশ্য একটাই—Class-এর Property এবং Method কীভাবে ব্যবহার করা হবে, সেটি নিয়ন্ত্রণ করা।
public দিয়ে সবার জন্য Access রাখা যায়, private দিয়ে শুধু নিজের Class-এর মধ্যে সীমাবদ্ধ রাখা যায় এবং protected দিয়ে নিজের Class ও Child Class-এর মধ্যে Access দেওয়া যায়। অন্যদিকে, readonly কোনো Property-এর Value পুনরায় পরিবর্তন করা থেকে আটকায়।

