// Week 1 
// MiU 1202 
// Janis Jae Hines 
// January 31, 2012 



var json = {
	"event1": {
		"events": ["Event: ", "Zach's Birthday"],
		"recurrence": ["Recurrence: ", "Yearly"],
		"often": ["Number of Recurrences: ", "10"],
    	"info" : ["Additional Info: ", "None"],
    	"location": ["Location of Event: ", "Home"],
    	"relevance": ["The Event is for: ", "Family"],
    	"guest": ["Guests: ", "004" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "07/06/2012"],
    	"notes": ["Notes: ", "Don't forget balloons!"]
    },
    "event2": {
    	"events": ["Event: ", "Office Party"],
		"recurrence": ["Recurrence: ", "Weekly"],
		"often": ["Number of Recurrences: ", "52"],
    	"info" : ["Additional Info: ", "Casual Dress"],
    	"location": ["Location of Event: ", "Office"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "010" ],
    	"importance": ["Event Importance: ", "6"],
    	"date": ["Date of Event: ", "01/31/2012"],
    	"notes": ["Notes: ", "Don't forget drinks!"]
    },
    "event3": {
    	"events": ["Event: ", "Dinner Party"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring a guest"],
    	"location": ["Location of Event: ", "Friend's home"],
    	"relevance": ["The Event is for: ", "Friend"],
    	"guest": ["Guests: ", "001" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "08/09/2012"],
    	"notes": ["Notes: ", "Formal attire"]
    },
    "event4": {
    	"events": ["Event: ", "Daniel's Birthday Party"],
		"recurrence": ["Recurrence: ", "Yearly"],
		"often": ["Number of Recurrences: ", "50"],
    	"info" : ["Additional Info: ", "Bring a gift"],
    	"location": ["Location of Event: ", "Walmart"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "999" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "11/11/2012"],
    	"notes": ["Notes: ", "None"]
    },
    "event5": {
    	"events": ["Event: ", "School Party"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring beverages"],
    	"location": ["Location of Event: ", "Son's school"],
    	"relevance": ["The Event is for: ", "Family"],
    	"guest": ["Guests: ", "000" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "02/14/2012"],
    	"notes": ["Notes: ", "Bring Valentine's Day Gifts"]
    },
    "event6": {
    	"events": ["Event: ", "Class"],
		"recurrence": ["Recurrence: ", "Weekly"],
		"often": ["Number of Recurrences: ", "12"],
    	"info" : ["Additional Info: ", "Bring laptop and notes"],
    	"location": ["Location of Event: ", "University"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "000" ],
    	"importance": ["Event Importance: ", "8"],
    	"date": ["Date of Event: ", "01/01/2012"],
    	"notes": ["Notes: ", "None"]
    },
    "event7": {
    	"events": ["Event: ", "Date Night"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "52"],
    	"info" : ["Additional Info: ", "N/A"],
    	"location": ["Location of Event: ", "Varies"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "001" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "01/06/2012"],
    	"notes": ["Notes: ", "Dress Nice"]
    },
    "event8": {
    	"events": ["Event: ", "Parent's Anniversary Party"],
		"recurrence": ["Recurrence: ", "Yearly"],
		"often": ["Number of Recurrences: ", "50"],
    	"info" : ["Additional Info: ", "Bring a gift"],
    	"location": ["Location of Event: ", "Brother's home"],
    	"relevance": ["The Event is for: ", "Family"],
    	"guest": ["Guests: ", "004" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "02/27/2012"],
    	"notes": ["Notes: ", "N/A"]
    },
    "event9": {
    	"events": ["Event: ", "Co-worker's Party"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring a guest"],
    	"location": ["Location of Event: ", "Co-worker's home"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "001" ],
    	"importance": ["Event Importance: ", "7"],
    	"date": ["Date of Event: ", "12/12/2012"],
    	"notes": ["Notes: ", "Bring a candle"]
    },
     "event10": {
    	"events": ["Event: ", "Bar Mitzvah"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring a guest"],
    	"location": ["Location of Event: ", "Friend's home"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "006" ],
    	"importance": ["Event Importance: ", "7"],
    	"date": ["Date of Event: ", "05/30/2012"],
    	"notes": ["Notes: ", "Bring a gift"]
    },
     "event11": {
    	"events": ["Event: ", "Ashley's Graduation"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring a guest"],
    	"location": ["Location of Event: ", "Ashley's school"],
    	"relevance": ["The Event is for: ", "Family"],
    	"guest": ["Guests: ", "001" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "04/14/2014"],
    	"notes": ["Notes: ", "Bring a card"]
    },
     "event12": {
    	"events": ["Event: ", "Tracy's Big 40 Party"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring a dessert"],
    	"location": ["Location of Event: ", "Westchester Village"],
    	"relevance": ["The Event is for: ", "Family"],
    	"guest": ["Guests: ", "150" ],
    	"importance": ["Event Importance: ", "9"],
    	"date": ["Date of Event: ", "01/30/2012"],
    	"notes": ["Notes: ", "Bring a fire extinguisher!"]
    },
     "event13": {
    	"events": ["Event: ", "Scavenger Hunt"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring a prize to hide"],
    	"location": ["Location of Event: ", "Trinity Playground"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "004" ],
    	"importance": ["Event Importance: ", "7"],
    	"date": ["Date of Event: ", "04/20/2012"],
    	"notes": ["Notes: ", "None"]
    },
     "event14": {
    	"events": ["Event: ", "Moving Party"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring a box"],
    	"location": ["Location of Event: ", "Friend's home"],
    	"relevance": ["The Event is for: ", "Friend"],
    	"guest": ["Guests: ", "000" ],
    	"importance": ["Event Importance: ", "5"],
    	"date": ["Date of Event: ", "03/24/2012"],
    	"notes": ["Notes: ", "N/A"]
    },
     "event15": {
    	"events": ["Event: ", "Welcome Home Party"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Brian Newbraugh"],
    	"location": ["Location of Event: ", "Cousin's home"],
    	"relevance": ["The Event is for: ", "Family"],
    	"guest": ["Guests: ", "001" ],
    	"importance": ["Event Importance: ", "8"],
    	"date": ["Date of Event: ", "10/4/2014"],
    	"notes": ["Notes: ", "Bring a gift"]
    },
     "event16": {
    	"events": ["Event: ", "Seminar"],
		"recurrence": ["Recurrence: ", "Weekly"],
		"often": ["Number of Recurrences: ", "52"],
    	"info" : ["Additional Info: ", "Bring pen and paper"],
    	"location": ["Location of Event: ", "Conference Room"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "000" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "2/9/2012"],
    	"notes": ["Notes: ", "N/A"]
    },
     "event17": {
    	"events": ["Event: ", "Shakira Concert"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Bring Dani"],
    	"location": ["Location of Event: ", "LA"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "001" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "6/21/2012"],
    	"notes": ["Notes: ", "None"]
    },
     "even18": {
    	"events": ["Event: ", "Fundraiser"],
		"recurrence": ["Recurrence: ", "Monthly"],
		"often": ["Number of Recurrences: ", "12"],
    	"info" : ["Additional Info: ", "Bring guests"],
    	"location": ["Location of Event: ", "Holiday Inn"],
    	"relevance": ["The Event is for: ", "Other"],
    	"guest": ["Guests: ", "010" ],
    	"importance": ["Event Importance: ", "9"],
    	"date": ["Date of Event: ", "3/8/2012"],
    	"notes": ["Notes: ", "Bring donation"]
    },
     "event19": {
    	"events": ["Event: ", "Royal Ball"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "Formal attire"],
    	"location": ["Location of Event: ", "King's Palace"],
    	"relevance": ["The Event is for: ", "Family"],
    	"guest": ["Guests: ", "001" ],
    	"importance": ["Event Importance: ", "10"],
    	"date": ["Date of Event: ", "8/8/2012"],
    	"notes": ["Notes: ", "None"]
    },
     "event20": {
    	"events": ["Event: ", "Launch Party"],
		"recurrence": ["Recurrence: ", "Once"],
		"often": ["Number of Recurrences: ", "0"],
    	"info" : ["Additional Info: ", "None"],
    	"location": ["Location of Event: ", "Conference Room"],
    	"relevance": ["The Event is for: ", "Friend"],
    	"guest": ["Guests: ", "003" ],
    	"importance": ["Event Importance: ", "7"],
    	"date": ["Date of Event: ", "9/10/2012"],
    	"notes": ["Notes: ", "N/A"]
    }
}
