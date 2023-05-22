# API Documentation

## Overview

This API provides functionality for creating, updating, and deleting projects and adverts.

## Authentication

UserMS Auth

## Error Codes

This API uses the following error codes:

- `400 Bad Request` - The request was malformed or missing required parameters.
- `401 Unauthorized` - The user does not have permission to access the requested resource.
- `404 Not Found` - The requested resource was not found.
- `500 Internal Server Error` - There was an error processing the request.

## Routes

### Project

#### Create Project

```
POST /project

```

Creates a new project.

##### Request

- `title` (string, required): The title of the project.
- `department` (string, required): The department responsible for the project.
- `goals` (string, required): The goals of the project.
- `summary` (string): A summary of the project.
- `startdate` (string, required): The start date of the project.
- `enddate` (date): The end date of the project.
- `is_finished` (boolean): Whether the project is finished.

Response

- `result` (boolean): Whether the project was created successfully.

#### Get Projects

```
GET /project

```

Gets a list of all projects.

##### Request

- `project_id` (objectId): The ID of the project to retrieve.

##### Response

- `title` (string): The title of the project.
- `department` (string): The department responsible for the project.
- `goals` (string): The goals of the project.
- `summary` (string): A summary of the project.
- `startdate` (string): The start date of the project.
- `enddate` (date): The end date of the project.
- `is_finished` (boolean): Whether the project is finished.

#### Update Project

```
PATCH /project

```

Updates an existing project.

##### Request

- `project_id` (objectId, required): The ID of the project to update.
- `title` (string): The new title of the project.
- `department` (string): The new department responsible for the project.
- `goals` (string): The new goals of the project.
- `summary` (string): The new summary of the project.
- `startdate` (string): The new start date of the project.
- `enddate` (date): The new end date of the project.
- `is_finished` (boolean): Whether the project is finished.

##### Response

- `result` (boolean): Whether the project was updated successfully.

#### Delete Project

```
DELETE /project

```

Deletes an existing project.

##### Request

- `project_id` (objectId, required): The ID of the project to delete.

##### Response

- `result` (boolean): Whether the project was deleted successfully.

### Advert

#### Create Advert

```
POST /advert

```

Creates a new advert.

##### Request

- `project_id` (objectId, required): The ID of the project associated with the advert.
- `title` (string, required): The title of the advert.
- `requirements` (string, required): The requirements for the position advertised.
- `publish_date` (date): The date the advert was published.
- `deadline` (date): The deadline for applications.

##### Response

- `result` (boolean): Whether the advert was created successfully.

#### Get Adverts

```
GET /advert

```

Gets a list of all adverts.

##### Request

- `project_id` (objectId): The ID of the project associated with the advert.
- `advert_id` (objectId): The ID of the advert to retrieve.

##### Response

- `project_id` (objectId): The ID of the project associated with the advert.
- `title` (string): The title of the advert.
- `requirements` (string): The requirements for the position advertised.
- `publish_date` (date): The date the advert was published.
- `deadline` (date): The deadline for applications.

#### Update Advert

```
PATCH /advert

```

Updates an existing advert.

##### Request

- `project_id` (objectId, required): The ID of the project associated with the advert.
- `advert_id` (objectId, required): The ID of the advert to update.
- `title` (string): The new title of the advert.
- `requirements` (string): The new requirements for the position advertised.
- `publish_date` (date): The new date the advert was published.
- `deadline` (date): The new deadline for applications.

##### Response

- `result` (boolean): Whether the advert was updated successfully.

#### Delete Advert

```
DELETE /advert
```

Deletes an existing advert.

##### Request

- `project_id` (objectId, required): The ID of project
- `advert_id` (objectId, required): The ID of advert

##### Response

- `result` (boolean): Whether the advert was deleted successfully.
