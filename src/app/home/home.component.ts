import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  title = 'angulartask';

  //interpolation eg1
  interpolationvar='Im hardcoded textin Interpolation';
  //interpolation eg2
  interpolvar2:number=5;
  interpolvar3:number=10;


  //PropertyBinding
    //Binding the src attribute of an image:
    imageUrl = 'https://cdn1.vectorstock.com/i/1000x1000/71/00/yes-you-can-motivational-quote-on-black-background-vector-8817100.jpg';
    
    //Binding the disabled attribute of a button:
    isDisabled = false; // or false
    
   
    //Binding the innerHTML property of an element (with caution):
    htmlContent = '<span style="color: blue;">This is HTML content</span>';
    
    //Binding the title attribute for tooltips:
    buttonTitle = 'Hello :)';


    //Style Binding
    isBackgroundRed = true;
    toggleBackgroundColor(): void {
      this.isBackgroundRed = !this.isBackgroundRed;
    }
    
    fontSize = 16;
    increaseFontSize(): void {
      this.fontSize += 2;
    }
    decreaseFontSize(): void {
      if (this.fontSize > 10) {
        this.fontSize -= 2;
      }
    }

   //Binding the style property to set inline CSS:
   isTextRed = true; // or false
    

  isError='false';

  //ngstyle : Dynamic Styles with Functions
  fontsize: number = 16; // Initial font size
  fontColor: string = 'black'; // Initial font color

  calculateStyles() {
    return {
      'font-size': this.fontsize + 'px',
      'color': this.fontColor
    };
  }

  //EventBinding eg - Counting the clicks 
  count = 0;
  ClickMe() {
    this.count++;
    console.log('Button1 clicked!');
  }

  //eg2
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  //eg3
  firstname = '';
  GetFirstName(event: any) { // without type info
    this.firstname = event.target.value;
  }
  lastname='';
  GetLastName(event: any) { // without type info
    this.lastname = event.target.value;
  }
  

  //eg4
  inputValue = '10'; // Initialize the input value
  onInputChange(event: Event): void {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
  


  //2Way Binding
  fullname:string='';
  clearname(){
    this.fullname="";
  }


  message1:any="Hii"
  message2 = ''; // Initialize the input value
  InputEvent(event: Event): void {
    this.message2 = (event.target as HTMLInputElement).value;
  }
  message:any="Hello There!"

  
  //
  ngiffun = true;
  if(ngiffun = true) {
    document.write("ngif fun execute bcoz it was true");
  }

  showMessage: boolean = true;
  // Function to toggle the showMessage variable
  //<button (click)="toggleMessage()">Toggle Message</button>
  toggleMessage() {
    this.showMessage = !this.showMessage; // Toggles between true and false
  }

  isvalid: boolean = true;
  changevalue(ex: any) {
    this.isvalid = ex;
  }


  name = ""
  clearName() {
    this.name = "";
  }



  Myshopping: string = 'cups';
  selectedOption: string = '';

  userRole: string = '';

  setUserRole(role: string) {
    this.userRole = role;
  }

  users = [
    {
      Id: 1,
      Name: "John Doe",
      Mobile: "123-456-7890",
      Age: 30,
      Address: "123 Main Street",
      ViewDetails: "View",
    },
    {
      Id: 2,
      Name: "Jane Smith",
      Mobile: "456-789-1234",
      Age: 28,
      Address: "456 Elm Street",
      ViewDetails: "View",
    },
    {
      Id: 3,
      Name: "Michael Johnson",
      Mobile: "789-123-4567",
      Age: 35,
      Address: "789 Oak Avenue",
      ViewDetails: "View",
    },
    {
      Id: 4,
      Name: "Emily Wilson",
      Mobile: "234-567-8901",
      Age: 26,
      Address: "234 Pine Road",
      ViewDetails: "View",
    },

  ];

  //ngFOr TrackBy Example
  employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'UI Designer' },
    { id: 3, name: 'Bob Johnson', position: 'Product Manager' },
    { id: 4, name: 'Alice Brown', position: 'Quality Assurance' }
  ];

  addEmployee() {
    const newEmployee = {
      id: this.employees.length + 1,
      name: 'Aditya Shinde',
      position: 'SDE1'
    };
    this.employees.push(newEmployee); // Push the new employee into the existing employees array
  }

  newEmployee: any = { id: 0, name: '', position: '' }; // Initialize a new employee object

  // Function to add a new employee
  addEmployeee() {
    const nextId = this.employees.length + 1;
    this.newEmployee.id = nextId;
    this.employees.push({ ...this.newEmployee }); // Push the new employee into the existing employees array (create a copy)

    // Reset the newEmployee object for the next input
    this.newEmployee = { id: 0, name: '', position: '' };
  }




  //Grouping in *ngFor

  peopleByCountryCity = [
    {
      country: 'USA',
      cities: [
        { name: 'New York', people: ['John', 'Alice'] },
        { name: 'Los Angeles', people: ['Bob', 'Eve'] }
      ]
    },
    {
      country: 'Canada',
      cities: [
        { name: 'Toronto', people: ['Mary', 'Steve'] },
        { name: 'Vancouver', people: ['David', 'Sarah'] }
      ]
    }
  ];


  //ngstyle

  people: any[] = [
    {
      "name": "Aditya",
      "Country": "India"
    },
    {
      "name": "Pranit",
      "Country": "Spain"
    },
    {

      "name": "Ashu",
      "Country": "Spain"

    }
  ]

  getcolor(Country: any) {
    switch (Country) {
      case 'India':
        return 'green';

      case 'Spain':
        return 'red';

      default:
        return 'black';
    }
  }

  getcssclass(flag: string) {
    let cssclass;
    if (flag == 'mode') {
      cssclass = {
        'three': true,
        'four': false,
      }
    }
    else {
      cssclass = {
        'three': false,
        'four': true,
      }
    }
    return cssclass;
  }

  //Pipes Example
  employeess:any[]=[
    {
      empcode: 'E001',
      name: 'John Doe',
      dob:'1990-05-15',
      salary: 60000
    },
    {
      empcode: 'E002',
      name: 'Jane Smith',
      dob:'1985-09-22',
      salary: 55000
    },
    {
      empcode: 'E003',
      name: 'Bob Johnson',
      dob: new Date('1995-03-10'),
      salary: 62000
    },
    {
      empcode: 'E004',
      name: 'Alice Brown',
      dob:'1988-11-05',
      salary: 58000
    }
  ];

  str1:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima voluptas, voluptatibus id provident laudantium tenetur reprehenderit culpa corporis. Ratione eaque asperiores quod, quam mollitia nisi illo. Fuga, perspiciatis itaque!</p>";

  //custom pipe
  employes: any[] = [
    {
      empcode: 'E001',
      name: 'John Doe',
      dob: '1990-05-15',
      salary: 60000,
      gender: 'Male' // Add the "gender" property and its value here
    },
    {
      empcode: 'E002',
      name: 'Jane Smith',
      dob: '1985-09-22',
      salary: 55000,
      gender: 'Female' // Add the "gender" property and its value here
    },
    {
      empcode: 'E003',
      name: 'Bob Johnson',
      dob: new Date('1995-03-10'),
      salary: 62000,
      gender: 'Male' // Add the "gender" property and its value here
    },
    {
      empcode: 'E004',
      name: 'Alice Brown',
      dob: '1988-11-05',
      salary: 58000,
      gender: 'Female' // Add the "gender" property and its value here
    }
  ];
  
}
