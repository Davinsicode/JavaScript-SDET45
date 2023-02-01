// We no need to mention any Index value --> By default its take starting index value as 0 and ends with array size
const packages = ["Party Package","Traditional Package", "Friends Package", "Family Package"]
for (Index in packages) 
{
    // In ( For In Loop ) we need to mention the array name of (index) than it will print the particular indexed value
console.log(packages[Index]);    
}