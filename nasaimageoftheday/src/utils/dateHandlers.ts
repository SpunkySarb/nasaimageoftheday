

export const getTodaysDate = ()=>{
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;

}

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }


  export const parseDateString = (dateString: string): Date => {
    const [yearStr, monthStr, dayStr] = dateString.split('-').map(Number);
    // Subtracting 1 from month because months in JavaScript Date objects are zero-based
    const month = monthStr - 1;
    return new Date(yearStr, month, dayStr);
  }


  export const getNextPrevDate = (date: Date, direction: "next" | "prev"): string => {
    const newDate = new Date(date);
  
    if (direction === "next") {
      newDate.setDate(newDate.getDate() + 1); 
    } else{
      newDate.setDate(newDate.getDate() - 1); 
    }
  
    return formatDate(newDate);
  }