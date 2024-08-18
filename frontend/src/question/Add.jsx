import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';

const Add = () => {
    const [theme, setTheme] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = { theme, question, answer };

        fetch('http://localhost:8080/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(response => {
                if (response.ok) {
                    alert('Question add success');
                    navigate('/');
                } else {
                    alert('Failed to add question');
                }
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <Container>
            <h2 className="my-4">Add New Question</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTheme">
                    <Form.Label>Theme</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter theme"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formQuestion">
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAnswer">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Question
                </Button>
            </Form>
        </Container>
    );
};

export default Add;
