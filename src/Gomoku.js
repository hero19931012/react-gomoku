import styled from 'styled-components';

const OutterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ReloadButton = styled.button`
margin: 20px 0;
`

const Row = styled.div``

const BlackPiece = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: black;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px rgba(50, 50, 50, 0.3);
`

const WhitePiece = styled(BlackPiece)`
  background-color: white;
`

const Board = styled.div``

function Block({ row, column, children }) {
  return (
    <div key={column}
      row={row}
      column={column}
      className="square">
      {children}
    </div>
  );
}

function BoardBlocks({ map }) {
  return (
    // 先取出 row
    map.map((boardRow, index) => {
      let rowNumber = index
      return (
        <Row key={index} row={index} >
          {/* 取出每個 block 裡面的值 */}
          {boardRow.map((value, index) => {
            return (
              <Block
                key={index}
                row={rowNumber}
                column={index}>
                {value === null ? null : value === '0' ? <BlackPiece /> : <WhitePiece />}
              </Block>
            )
          })}
        </ Row>
      )
    })
  )
}

function handleReload() {
  window.location.reload()
}

export default function Gomoku({ map, handleClick }) {

  function handleBlockClick(e) {
    handleClick(e.target)
  }

  return (
    <OutterWrapper>
      <h1>React Gomoku</h1>
      <Board id="board" onClick={handleBlockClick}>
        <BoardBlocks map={map}/>
      </Board>
      <ReloadButton onClick={handleReload}>再玩一次</ReloadButton>
    </OutterWrapper>
  )
}
