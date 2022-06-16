import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('test button click',()=>{
//   render(<App/>);
//   const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
//   fireEvent.click(screen.getByText('Click here'));
//   //expect(screen.getByRole('alert')).toHaveTextContent('Button displayed')
//   expect(alertMock).toHaveBeenCalledTimes(1);
// });

test('test sending content through props', ()=> {
	render(<App lang="JS"/>);

	//by role
	//expect(screen.getByRole('heading')).toHaveTextContent('JS is fav');
	
	//by test id
	expect(screen.getByTestId('my_test_id')).toHaveTextContent('JS is fav');
});
