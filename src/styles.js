import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  transition: background 0.5s ease-in-out;
`;

export const FormContainer = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin-bottom: 30px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const Input = styled.input`
  margin: 15px 0;
  padding: 12px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff5722;
    outline: none;
    box-shadow: 0 0 8px rgba(255, 87, 34, 0.5);
  }
`;

export const Button = styled.button`
  background: #ff5722;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin: 10px 0;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #e64a19;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
`;

export const UserCard = styled.div`
  background: ${(props) => (props.highlighted ? '#ffe0b2' : 'white')};
  border: 2px solid ${(props) => (props.highlighted ? '#ff9800' : '#ddd')};
  border-radius: 12px;
  padding: 15px;
  margin: 10px;
  width: 180px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;
