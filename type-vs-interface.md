Difference between Type Alias vs Interface in TypeScript

Introduction
TypeScript এ কাজ করার সময় type এবং interface দুটোই অনেক গুরুত্বপূর্ণ। বিশেষ করে যখন কোনো Object-এর মধ্যে কী কী Property থাকবে এবং সেগুলোর Data Type কী হবে, তা নির্ধারণ করতে Type and interface ব্যবহার করা হয়। দুটিকে প্রায় একই রকম মনে হলেও দুটো দিয়েই আমরা Object-এর Structure তৈরি করতে পারি। কিন্তু এদের মধ্যে কিছু পার্থক্য রয়েছে। আজ আমরা কিছু উদাহরণের মাধ্যমে বুঝব type এবং interface কী, এদের মধ্যে পার্থক্য কোথায় এবং কোন পরিস্থিতিতে কোনটি ব্যবহার করা ভালো।

What is Type Alias?
Type Alias হলো কোনো Type-এর একটি নাম তৈরি করা। TypeScript এ type Keyword ব্যবহার করে আমরা এটি তৈরি করি।
ধরি আমাদের একটি User Object আছে। সেখানে User-এর Name, Age এবং Email থাকবে। প্রতিবার এই Structure না লিখে আমরা একটি Type তৈরি করে ব্যবহার করতে পারি।

type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Pronoy",
  age: 24,
  email: "pronoy@example.com"
};

এখানে আমরা User নামে একটি Type তৈরি করেছি। এখন যেকোনো জায়গায় User ব্যবহার করলে TypeScript নিশ্চিত করে যে প্রয়োজনীয় Property এবং Data Type ঠিক আছে।
Type Alias-এর আরেকটি সুবিধা হলো, এটি শুধু Object-এর জন্য নয়। String, Number, Union এবং Tuple-এর মতো Type তৈরিতেও ব্যবহার করা যায়।

type Status = "active" | "inactive";

এখানে Status-এর Value শুধু active অথবা inactive হতে পারবে।

What is Interface?

Interface ও অনেকটা Type Alias-এর মতো কাজ করে। এটি মূলত কোনো Object-এর Structure নির্ধারণ করতে ব্যবহার করা হয়।

interface User {
  name: string;
  age: number;
  email: string;
}

এখানেও আমরা একটি User-এর Structure তৈরি করেছি। অর্থাৎ, User Object-এর মধ্যে কোন Property থাকবে এবং সেগুলোর Type কী হবে, তা নির্ধারণ করে দিয়েছি। এখন আসি আমরা কিছু Core Difference-এর ক্ষেত্রে। কারণ ২টা কিন্তু একই কাজ করছে।

Differences Between Type and Interface

প্রথম পার্থক্য হলো, Interface ব্যবহার করে আমরা সহজেই অন্য Interface-এর Structure Extend করতে পারি।

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Pronoy",
  email: "pronoy@example.com",
  role: "admin"
};

এখানে Admin Interface, User Interface-কে extends করেছে। ফলে User-এর সব Property স্বয়ংক্রিয়ভাবে Admin-এর মধ্যে চলে এসেছে। আমাদের আলাদাভাবে name এবং email Property লিখতে হচ্ছে না। শুধু নতুন Property role যুক্ত করলেই হচ্ছে।

অন্যদিকে, Type Alias-এর ক্ষেত্রে & বা Intersection Operator ব্যবহার করে একাধিক Type একত্র করা যায়।

type User = {
  name: string;
  email: string;
};

type Admin = User & {
  role: string;
};

const admin: Admin = {
  name: "Pronoy",
  email: "pronoy@example.com",
  role: "admin"
};

এখন Admin-এর মধ্যে name, email এবং role ৩টি Property-ই থাকবে।

আরেকটি গুরুত্বপূর্ণ পার্থক্য হলো Declaration Merging। একই নামে একাধিক Interface তৈরি করলে TypeScript সেগুলো একত্র করে নেয়।

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Pronoy",
  age: 24
};

এখানে আমরা একই নামে দুটি Interface তৈরি করেছি। TypeScript এই দুটি Declaration কে একত্র করে একটি Interface হিসেবে বিবেচনা করবে।
অর্থাৎ, এখন User-এর মধ্যে name এবং age দুটো Property-ই রয়েছে।

কিন্তু Type Alias-এর ক্ষেত্রে:
type User = {
  name: string;
};

type User = {
  age: number;
};
এখানে একই নামে দুটি Type Alias তৈরি করার চেষ্টা করা হয়েছে। যার ফলে এখানে “Duplicate identifier 'User'.” Error আসবে কারণ TypeScript একই নামে একাধিক Type Alias Declaration করতে দেয় না।

Interface মূলত Object-এর Structure নির্ধারণের জন্য ব্যবহৃত হয়। কিন্তু Type Alias দিয়ে আমরা আরও বিভিন্ন ধরনের Type তৈরি করতে পারি।

Union Type
ধরি একটি User-এর Status শুধু active অথবা inactive হতে পারবে।
type Status = "active" | "inactive";
const userStatus: Status = "active";

এখানে | ব্যবহার করে আমরা একাধিক সম্ভাব্য Value নির্ধারণ করেছি। যা Interface দিয়ে সরাসরি Union Type তৈরি করা যায় না।

When Should we Use Type or Interface?
সাধারণত Object-এর Structure তৈরি করতে, Class-এর Contract নির্ধারণ করতে অথবা অন্য Interface Extend করতে চাইলে interface ব্যবহার করা ভালো।
অন্যদিকে, Union, Intersection, Tuple কিংবা Primitive Type তৈরি করতে চাইলে type বেশি সুবিধাজনক।
But Object-এর Structure তৈরির ক্ষেত্রে দুটোই ব্যবহার করা যায়। তাই সবসময় একটি অন্যটির চেয়ে ভালো, এমন নয়।

Conclusion
সবশেষে বলা যায়, Type Alias এবং Interface দুটোই TypeScript-এর গুরুত্বপূর্ণ অংশ। এদের কাজ অনেকটা একই রকম হলেও কিছু বিশেষ সুবিধা ও পার্থক্য রয়েছে। যেমন, Object-এর Structure তৈরি বা Extend করার ক্ষেত্রে Interface ব্যবহার করা যায়, আবার Union, Tuple কিংবা একাধিক Type একসঙ্গে ব্যবহার করার ক্ষেত্রে Type Alias বেশ কাজে আসে। তাই কোনটি ব্যবহার করব, সেটি নির্ভর করবে আমাদের প্রয়োজনের ওপর।

