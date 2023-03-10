# π API μλ²μ ν΅μ νμ¬ μλνλ λκΈ νλ‘μ νΈ Reduxλ‘ κ΅¬ννκΈ°

<!-- <p align="middle">
<img src="./screenshot.png" />
</p> -->

## πλͺ©μ°¨

---

- [π μ¬μ© λΌμ΄λΈλ¬λ¦¬](#-μ¬μ©-λΌμ΄λΈλ¬λ¦¬)
- [πββοΈ μ€νλ°©λ²](#οΈ-μ€νλ°©λ²)
- [π‘ κ΅¬νλͺ©ν](#π‘-κ΅¬ν-λͺ©ν)
  - [1. λκΈ νλ‘μ νΈ CRUD ](#1-λκΈ-νλ‘μ νΈ-crud)
  - [2. API νΈμΆ μ΅μ ν](#2-api-νΈμΆ-μ΅μ ν)
  - [3. ν€λ³΄λλ§μΌλ‘ μΆμ² κ²μμ΄λ€λ‘ μ΄λ κ°λ₯νλλ‘ κ΅¬ν](#3-ν€λ³΄λλ§μΌλ‘-μΆμ²-κ²μμ΄λ€λ‘-μ΄λ-κ°λ₯νλλ‘-κ΅¬ν)

<br>

<br>

## π μ¬μ© λΌμ΄λΈλ¬λ¦¬

---

<div align="center">
  
<img src="https://img.shields.io/badge/Redux-7347B6?style=for-the-badge&logo=Redux&logoColor=white" />
<img src="https://img.shields.io/badge/ReduxToolkit-7347B6?style=for-the-badge&logo=Redux&logoColor=white" />
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  
<br/>
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
</div>

<br>

## πββοΈ μ€νλ°©λ²

---

- μμ‘΄μ± package μ€μΉ

```
yarn
```

- λΈλΌμ°μ  μ€ν

```
yarn start
```

- json-server μ€ν

```
yarn server
```

<br>

## π‘ κ΅¬ν λͺ©ν

---

 <h3>

**[νκ΅­ μμ μ λ³΄](https://clinicaltrialskorea.com/) νμ΄μ§μ κ²μμμ­ ν΄λ‘ νκΈ°**

 </h3>

- **μ§νλͺ κ²μμ API νΈμΆ ν΅ν΄μ κ²μμ΄ μΆμ² κΈ°λ₯ κ΅¬ν**

- **API νΈμΆ μ΅μ ν**

- **ν€λ³΄λλ§μΌλ‘ μΆμ² κ²μμ΄λ€λ‘ μ΄λ κ°λ₯νλλ‘ κ΅¬ν**
  <br>

---

<br>

### 1. λκΈ νλ‘μ νΈ CRUD

<br>
  
  * μ¬μ©μκ° μλ ₯ν νμ€νΈμ μΌμΉνλ λΆλΆ λ³Όλμ²λ¦¬
  * κ²μμ΄κ° μμ μ βκ²μμ΄ μμβ νμΆ

<br>

**Component**

- μ¬μ©μκ° μλ ₯ν νμ€νΈ( inputValue )λ₯Ό κΈ°μ€μΌλ‘ κ° μΆμ² κ²μμ΄μ λ¬Έμμ΄μ split λ©μλλ₯Ό μ¬μ©νμ¬ λλμ΄μ€ ν, inputValue λΆλΆμλ§ CSS μ²λ¦¬λ₯Ό ν΄μ£Όμ΄ Bold ν¨κ³Όλ₯Ό μ€

- κ²μμ°½μ΄ λΉμ΄ μκ±°λ μΆμ² κ²μμ΄ dataλ₯Ό λ΄μ λ°°μ΄μ κΈΈμ΄κ° 0μΌ λ(μΆμ²κ²μμ΄κ° μμ λ), 'κ²μμ΄ μμ'μ νμΆνλλ‘ μ‘°κ±΄λΆ λλλ§μ κ΅¬ν

```javascript
<WordBox ref={keyboardRef}>
  {inputValue !== "" && list?.length !== 0 ? (
    list?.map((word, idx) => {
      const keyValue = word?.sickCd;
      return word?.sickNm.includes(inputValue) ? (
        <Words key={keyValue} isFocus={index === idx ? true : false}>
          <ImgBox>
            <img
              src={require("images/searching_btn_black.png")}
              alt="κ²μνκΈ°"
            />
          </ImgBox>
          <span>{word?.sickNm.split(inputValue)[0]} </span>
          <span style={{ fontWeight: "bolder" }}>{inputValue}</span>
          <span>{word?.sickNm.split(inputValue)[1]}</span>
        </Words>
      ) : null;
    })
  ) : (
    <span>κ²μμ΄ μμ</span>
  )}
</WordBox>
```

<br>

### 2. API νΈμΆ μ΅μ ν

- API νΈμΆλ³λ‘ λ‘μ»¬ μΊμ± κ΅¬ν
  β‘οΈ μΊμ± κΈ°λ₯μ μ κ³΅νλ λΌμ΄λΈλ¬λ¦¬ μ¬μ© κΈμ§(React-Query λ±)

- μλ ₯λ§λ€ API νΈμΆνμ§ μλλ‘ API νΈμΆ νμλ₯Ό μ€μ΄λ μ λ΅ μλ¦½ λ° μ€ν

- APIλ₯Ό νΈμΆν  λ λ§λ€ `console.info("calling api")` μΆλ ₯μ ν΅ν΄ μ½μμ°½μμ API νΈμΆ νμ νμΈμ΄ κ°λ₯νλλ‘ μ€μ 

<br>

**Component**

- **Cache API**λ₯Ό μ¬μ©νμ¬ λ‘μ»¬ λ‘μ»¬ μΊμ±μ κ΅¬ν

- λ‘μ»¬ λΈλΌμ°μ μ **cacheStorage**μ μ΄μ μ νΈμΆνμ¬ μ μ₯ν API URLκ³Ό νμ¬ μμ²­ν API URLμ λΉκ΅ν ν, λ URLμ΄ matching λ  κ²½μ° **μΊμ± λ°μ΄ν°**λ₯Ό μ¬μ©νκ³ , matching λμ§ μμ κ²½μ° **API νΈμΆ**νλλ‘ κ΅¬ν

<br>

```javascript
export const getkeywordList = createAsyncThunk(
  "GET_KEYWORD_LIST",
  async (keyword) => {
    const url = instance.defaults.baseURL + `/sick?q=${keyword}`;
    const cacheStorage = await caches.open("searched_word");
    const responsedCache = await cacheStorage.match(url);

    try {
      if (responsedCache) {
        console.log("μΊμ μ¬μ©");
        return responsedCache.json();
      } else {
        const res = await instance.get(`/sick?q=${keyword}`);
        await cacheStorage.add(url);
        console.info("calling api");
        return res.data;
      }
    } catch (err) {
      console.log(err);
    }
  }
);
```

- **'useDebounce' Hook** μ μ¬μ©νμ¬ κ° μλ ₯μ¬μ΄μ delay(500ms)λ₯Ό μ£Όμ΄, API νΈμΆ νμλ₯Ό μ€μ

```javascript
import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounceValue;
};
```

<br>

### 3. ν€λ³΄λλ§μΌλ‘ μΆμ² κ²μμ΄λ€λ‘ μ΄λ κ°λ₯νλλ‘ κ΅¬ν

 <br>

**Component**

- κ²μμ°½μ **onKeyDown μ΄λ²€νΈ**λ₯Ό μ¬μ©νμ¬ ν€λ³΄λμ μ(ArrouUP), μλ(ArrowDown) λ²νΌμ μ΄λμ λ°λΌ **keyIndex** State κ°μ λ°κΏμ£Όμ΄ μΆμ² κ²μμ΄μ ν€λ³΄λ μ΄λμ΄ κ°λ₯νλλ‘ κ΅¬ν

```javascript
 const onkeyHandler = e => {
    switch (e.key) {
      case ArrowDown:
        setkeyIndex(keyIndex + 1);
        if (
          keyboardRef.current?.childElementCount === keyIndex + 1 ||
          keyIndex > keyboardRef.current?.childElementCount
        )
          setkeyIndex(0);
        break;
      case ArrowUp:
        setkeyIndex(keyIndex - 1);
        if (keyIndex <= 0 || keyIndex > keyboardRef.current?.childElementCount) {
          setkeyIndex(keyboardRef.current?.childElementCount - 1);
        }
        break;
      case Escape:
        setkeyIndex(-1);
        break;

    }
  };

  return (
    ...
        <SearchingBox onClick={dropdownOpenHandler}>
          <SearchInput
            onKeyDown={onkeyHandler}
            type="search"
            placeholder="μ§νλͺμ μλ ₯ν΄μ£ΌμΈμ."
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
              setkeyIndex(-1);
            }}
          />
    ...)

```

<br>
