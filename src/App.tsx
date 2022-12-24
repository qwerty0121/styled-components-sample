import styled from "styled-components"

function App() {
  const VerticalPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  `

  type TextProps = {
    color?: string,
    bold?: boolean
  }
  const Text = styled.span<TextProps>`
    color: ${(props) => props.color ? props.color : 'red'};
    font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  `
  return (
    <div className="App">
      <VerticalPanel>
        <Text>このテキストはstyled-componentsでスタイリングしたものです。</Text>
        <Text color="green">colorを指定</Text>
        <Text bold color="green">color/boldを指定</Text>
        <Text color="green" bold>color/boldを指定</Text>
      </VerticalPanel>
    </div>
  )
}

export default App
