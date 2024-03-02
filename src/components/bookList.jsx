import React from "react";
import Book from "../components/book";
import firstImg from "../assets/first.png";
import secondImg from "../assets/second.png";
import thirdImg from "../assets/third.png";
import fourthImg from "../assets/fourth.png";
import book from "../components/book";
import "../App.css";
const data = [
  {
    id: 0,
    name: "ვეფხისტყაოსანი",
    persons: ["ავთანდილი", "ტარიელი", "ფრიდონი"],
    image: firstImg,
    description:
      "შესანიშნავი პოეტის, შოთა რუსთაველის ბრწყინვალე პოემა, წიგნთა წიგნი და ლექსთა ლექსი, ტექსტი, რომელმაც ყველაზე დიდი ზეგავლება იქონია ქართულ კულტურასა და აზროვნებაზე, რომელსაც ყველაზე მეტი კომპილატორი და გამგრძელებელი ჰყავდა, რომელიც ქართველთა ყოველდღიური ცხოვრების უცვლელი მონაწილე იყო და არის დღემდე. ქართულ ენაზე შექმნილი ყველაზე გენიალური ნაწარმოები.",
  },
  {
    id: 1,
    name: "კაცი რომელსაც ლიტერატურა ძლიერ უყვარდა",
    persons: ["ვასიკო კეჟერაძე", "კლიმი", "კორესპონდენტი"],
    image: secondImg,
    description:
      "მკაცრად მეუბნება: „ დღესვე მიბრძანდით ხსენებულ რესპოდენტთან და შეავსეთ ანკეტა მისი პასუხისა და სურვილის მიხედვით და გახსოვდეთ, რომ ხანდახან საინტერესო ინდივიდის ჩვენებანი შესაძლოა მეტ ინტერესს მოიცავდეს, ვიდრე ათობით ადამიანის მდგრადი პასუხი. მაგრამ მე ჯერ უნდა დავრწმუნდე, რომ იმ კაცს მართლაცდა ზედმიწევნით უყვარს ლიტერატურა, ესე იგი, კულტურული დასვენების ესა თუ ის დარგი და შემდგომ, თუკი მხატვრული ლიტერატურა მართლაცდა მუქ წითელ ხაზად გასდევს მთელ მის ცხოვრებას, უნდა გამოვარკვიოთ - რატომ, - და ოდნავ მოლბა, - აბა, შენ იცი, წადი... “ - როგორ განვითარდება მოვლენები - წაიკითხეთ მოთხრობაში.",
  },
  {
    id: 2,
    name: "სტუმარ-მასპინძელი",
    persons: ["ჯოყოლა ალხასტაისძე", "ზვიადაური", "აღაზა"],
    image: thirdImg,
    description:
      "ადამიანი, რომლის სახელსაც განსაკუთრებული მსაზღვრელი არ სჭირდება. ამ ქართველმა გენიოსმა, მიუხედავად იმისა, რომ ლიტერატურული პროცესების შუაგულში არ ტრიალებდა, სხვა გლეხებივით მიწას ხნავდა, საქონელს უვლიდა, ნადირობდა, მოახერხა სრულიად განსაკუთრებული ლიტერატურული ნაწარმოებები შეექმნა, ყოფილიყო ყველაზე განათლებული, ჰუმანისტი, უსაზღვრო დიაპაზონის მოაზროვნე და ფშაური ზამთრის გრძელ, ბნელ ღამეებში დაეწერა თავისი პოეტური, დრამატურგიული, პუბლიცისტური თუ პროზაული შედევრები, სრულიად ახალ სიმაღლეზე აეყვანა ქართული პოემა.",
  },
  {
    id: 3,
    name: "მე ბებია ილიკო და ილარიონი",
    persons: ["ზურიკელა", "ილიკო", "ილარიონი"],
    image: fourthImg,
    description:
      "ნოდარ დუმბაძის პირველი და ყველაზე პოპულარული რომანი. ნაწარმოების მთავარი გმირი, მთხრობელი ზურიკელა ვაშალომიძე გურიის სოფელ ხიდისთავში ცხოვრობს ბებიასთან ერთად. ბებიას შვილიშვილის აღზრდაში მეზობლები, ილიკო და ილარიონი ეხმარებიან. ნაწარმოების მოქმედება დიდი სამამულო ომის დროს ვითარდება. რომანის მიხედვით გადაღებულია ამავე სახელწოდების ფილმი.",
  },
];

const bookList = () => {
  return (
    <div className="booklist">
      {data.map((book) => (
        <Book
          kay={book.id}
          image={book.image}
          name={book.name}
          person={book.persons}
          description={book.description}
          action={mesalert}
        />
      ))}
    </div>
  );
  function mesalert() {
    console.log(`${data.name}`);
  }
};

export default bookList;