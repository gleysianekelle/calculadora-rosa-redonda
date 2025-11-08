const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
            display.value = value;
                } else {
                        display.value += value;
                            }
                            }

                            function clearDisplay() {
                                display.value = '0';
                                }

                                function calculateResult() {
                                    try {
                                            let expression = display.value;
                                                    expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
                                                            
                                                                    display.value = eval(expression); 
                                                                        } catch (error) {
                                                                                display.value = 'Erro';
                                                                                    }
                                                                                    }

                                                                                    clearDisplay();
                                                                                    