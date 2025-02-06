```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to use setInterval. This creates a memory leak.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    
    // Missing cleanup function
    // return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```