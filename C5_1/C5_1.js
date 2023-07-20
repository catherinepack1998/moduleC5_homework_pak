const xmlDoc = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

let result = new Object();

const parse = new DOMParser();
const xmlDom = parse.parseFromString(xmlDoc, 'text/xml');


function createStudentList(){

    const listNode = xmlDom.firstChild;
    result[listNode.tagName] = new Array()

    for (let studentNode of listNode.children){
        const firstName = studentNode.querySelector('first').textContent;
        const nameNode = studentNode.querySelector('name');
        const secondName = studentNode.querySelector('second').textContent;
        const age = studentNode.querySelector('age').textContent;
        const prof = studentNode.querySelector('prof').textContent;
        const lang = nameNode.getAttribute('lang');
        const studentInfo = {'name' : `${firstName} ${secondName}`, 'age' : `${age}`, 'prof' : `${prof}`, lang: `${lang}`}
        result[listNode.tagName].push(studentInfo)
}
    return result
}

console.log(createStudentList())

