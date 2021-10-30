import './App.css';

const App = () => {
   return (
      <section className="App">
         <section className="container">
            <section className="reservation-container">
               <div>
                  <h5 className="reservation-header">Reservations</h5>
                  <section className="reservation-cards-container">
                     <div className="reservation-card-container">
                        Simon Riley
                     </div>
                  </section>
               </div>
               <div className="reservation-input-container">
                  <input />
                  <button>Add</button>
               </div>
            </section>
            <section className="customer-food-container">
               <div className="customer-food-card-container">
                  <p>Emma Watson</p>
                  <section className="customer-foods-container">
                     <div className="customer-food-container"></div>
                     <div className="customer-food-input-container">
                        <input />
                        <button>Add</button>
                     </div>
                  </section>
               </div>
            </section>
         </section>
      </section>
   );
};

export default App;
