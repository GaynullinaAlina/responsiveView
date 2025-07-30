import { ResponsiveView } from './components/ResponsiveView'

const colums = [
  {
    key: 'code',
    label: 'Код',
  },
  {
    key: 'name',
    label: 'ФИО',
  },
  {
    key: 'dob',
    label: 'Дата рождения',
  },
];

const data = [
  {
    code: '001',
    name: 'John Doe',
    dob: '01.01.1970',
  },
  {
    code: '002',
    name: 'Bob Smith',
    dob: '02.02.2005',
  },
  {
    code: '003',
    name: 'Luciano Panini',
    dob: '23.07.1976',
  },
];

function App() {
  return (
    <div style={{margin: "2em"}}>
      <ResponsiveView colums={colums} data={data} />
    </div>
     
  )
}

export default App
