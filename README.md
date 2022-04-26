# PluralSight API


![Logo](https://www.pluralsight.com/content/dam/pluralsight/newsroom/brand-assets/logos/PS_logo_F-01.png)


Its a rest API the provides the few courses that are available aon pluralsight website. It also has search functionality that is passing the keyword as paramater and api will return the courses realated to the keyword.

This was a collaborative project of six member to create a clone of pluralsight website. This Project was made as a part of construct week curriculum of MASAI School.




## Tech Stack

-  **Node**
-  **Express**
-  **MongoDB** (Data Storage)
-  **Heroku** (For Deployment)



## API Reference

#### API Link :- https://pluralsightapi.herokuapp.com

#### Get all items

```https
  GET /course
```

| Parameter | Description                |
| :-------- | :------------------------- |
| `api_key` | **Not Required**. |

#### Get item

```http
  GET /course/${search keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `search keyword`      | `string` | **Required**. In order to get courses realated to keyword passed |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- MongoDB server link is requried to store the data. 
- PORT which is provide by heroku. 

## Contributor

[@Suman Giri](https://github.com/SumanJK)


## Limitations

We have also made the authetication part. But not able to implement it.

