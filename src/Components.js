import styled from 'styled-components';

const ReloadButton = styled.button`
margin: 20px 0;
`

const Button = ({ row, column, children }) => {
  return (
    <div key={column} row={row} column={column} className="square" >{children}</div>
  );
}

const StyledRow = styled.div`
  display: flex;
`

const BoardWrapper = styled.div`
  display: inline-block;
`

const BlackPiece = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: black;
  // border: black solid 1px;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px rgba(50, 50, 50, 0.3);
`

const WhitePiece = styled(BlackPiece)`
  background-color: white
`

export default function Board({ map, handleClick, next }) {
  const handleBlockClick = (e) => {
    handleClick(e.target)
  }

  return <BoardWrapper onClick={handleBlockClick}>
    <ReloadButton onClick={() => {
      window.location.reload()
    }}>再玩一次</ReloadButton>
    {
      map.map((boardRow, index) => {
        let rowNumber = index
        return <StyledRow key={index} row={index} >
          {
            boardRow.map((value, index) => {
              return <Button key={index} row={rowNumber} column={index} >{value === null ? null : value === '0' ? <BlackPiece /> : <WhitePiece />} </Button>
            })
          }
        </ StyledRow>
      })
    }
  </BoardWrapper>
}
