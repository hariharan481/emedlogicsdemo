import React, { useEffect, useState } from 'react'

const Codenotes = () => {
  const [results, setResults] = useState("");


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/codes/${global.values.code}/details`);
        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values.code]);



  console.log("our result is", results);
  return (
    <div className="codenotes">

      <div >

        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {results && (
              <tr key={results.code}>
                <td>{results.codeNotes}</td>

              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Codenotes