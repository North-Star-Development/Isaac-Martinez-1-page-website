// types 
interface DetailsType {
    header : string,
    paragraph : string
}

interface ClientsType {
    name : string,
    testimony : string
}
/// paragraph details
export const paragraphDetails : Array<DetailsType> = [
    {
     header : "1. Reduce processing fees: ",
     paragraph : "By incentivizing customers to pay with cash, you can substantially cut down on credit card processing fees. This means more money in your pocket at the end of each month!"
     },
     {
      header : "2.  Improve cash flow:",
      paragraph : "With more customers opting for cash payments, you'll have immediate access to funds, which can be used to reinvest in your business or manage daily expenses."
     },
     {
       header : "3.  Enhance customer experience:",
       paragraph : "Our program is designed to be seamless and user-friendly. Your customers will appreciate the transparency and savings offered through cash discounts."
     },
     {
        header : "4. Easy implementation:",
        paragraph : "Our experienced team will guide you through the entire process, from installation to staff training. We'll ensure the transition is smooth and hassle-free."
     },
     {
        header : "5.  Support local business:",
        paragraph : "By encouraging cash transactions, you're supporting the local economy and fostering a sense of community among your patrons."
     }
]

// client details 
export const clientDetails : Array<ClientsType> = [
    {
      name : "Taylor Anderson",
      testimony : "Isaac is very great to work with. Very professional and goes the extra mile for his clients."
    },
    {
      name : "Bailey Thomson",
      testimony : "I will use Isaac again in future projects. I liked the personal touch that he provided     ... Professional, thorough, supportive and highly reliable."
    },
    {
      name : "Bell Cooper",
      testimony : "Isaac provided ongoing support beyond our engagement. If i ever need a change  or something minor added, Isaac is there     to assist."
    }
]