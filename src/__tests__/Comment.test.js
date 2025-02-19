import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('insere dois comentários e verifica se eles aparecem na lista', () => {
  render(<App />);

  // Seleciona os elementos usando data-testid
  const inputElement = screen.getByTestId('comment-input');
  const submitButton = screen.getByTestId('submit-button');
  const commentList = screen.getByTestId('comment-list');

  // Insere o primeiro comentário
  fireEvent.change(inputElement, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(submitButton);

  // Insere o segundo comentário
  fireEvent.change(inputElement, { target: { value: 'Segundo comentário' } });
  fireEvent.click(submitButton);

  // Verifica se os comentários foram adicionados à lista
  expect(commentList).toHaveTextContent('Primeiro comentário');
  expect(commentList).toHaveTextContent('Segundo comentário');
});