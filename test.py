from copy import copy

# ...
stocks = [
    {"name": "stock a", "prices": [4.5, 6.7, 1.1, 9.2, 20.7]},
    {"name": "stock b", "prices": [2.7, 8.9, 6.6, 2.4, 50.8]},
    {"name": "stock c", "prices": [4.5, 6.7, 2.7, 8.9, 67.6]},
    {"name": "stock d", "prices": [4.5, 6.7, 1.1, 9.2, 20.7]},
    {"name": "stock e", "prices": [4.5, 6.7, 1.1, 9.2, 20.7]}
]
records = []
print(f"(line 12) records: {records}")

for stock in stocks:
    # if no iterator available, (it is available 
    # here in this situation), 
    # assert index < length (list)

    tmp_price = stock["prices"][0]
    record = {"low": tmp_price, "high": tmp_price}

    for price in stock["prices"]:
        assert "records" in locals()      

        if price < record["low"]:  record["low"]  = price
        if price > record["high"]: record["high"] = price

    records.append(record)
    # print(record)
    print(f"{records}")