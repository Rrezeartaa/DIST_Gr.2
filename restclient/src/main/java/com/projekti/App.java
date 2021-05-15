package com.projekti;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;
import java.util.Date;

public final class App {
   
    static final String baseUrl = "http://localhost:5000/api";
    static final JsonHelper<Event> json = new JsonHelper<>(Event.class);
    public static void main(String[] args) throws Exception {
        int createRes = Integer.parseInt(post("/event", json.serializeJson(new Event(0, "Test", new Date(23/04/2021),"Red"))));
        System.out.println("post /event " + createRes);

        Event[] listAllRes = json.deserializeJsonList(get("/event"));
        System.out.println("get /event");
        for (Event event : listAllRes) {
            print(event);
        }

        Event findRes = json.deserializeJson(get("/event/" + createRes));
        System.out.println("get /event/:id");
        print(findRes);

        System.out.println("update /event/:id");
        System.out.println(put("/event/" + createRes, json.serializeJson(new Event(createRes, "Test",new Date(23/04/2021),"Red"))));

        System.out.println("delete /event/:id");
        System.out.println(delete("/event/" + createRes));
    }

    private static void print(Event event) {
        System.out.printf("{ id = %d, title = %s, event_date = %s, theme = %s}\n", event.getId(),
        event.getTitle(),event.getEventDate(),event.getTheme());
    }

    private static String get(String url) throws Exception {
        OkHttpClient client = new OkHttpClient();
        Request req = new Request.Builder().url(baseUrl + url).get().build();
        Response res = client.newCall(req).execute();
        return res.body().string();
    }

    private static String post(String url, String json) throws Exception {
        OkHttpClient client = new OkHttpClient();
        RequestBody body = RequestBody.create(MediaType.parse("application/json"), json);
        Request req = new Request.Builder().url(baseUrl + url).post(body).build();
        Response res = client.newCall(req).execute();
        return res.body().string();
    }

    private static String put(String url, String json) throws Exception {
        OkHttpClient client = new OkHttpClient();
        RequestBody body = RequestBody.create(MediaType.parse("application/json"), json);
        Request req = new Request.Builder().url(baseUrl + url).put(body).build();
        Response res = client.newCall(req).execute();
        return res.body().string();
    }

    private static String patch(String url, String json) throws Exception {
        OkHttpClient client = new OkHttpClient();
        RequestBody body = RequestBody.create(MediaType.parse("application/json"), json);
        Request req = new Request.Builder().url(baseUrl + url).patch(body).build();
        Response res = client.newCall(req).execute();
        return res.body().string();
    }

    private static String delete(String url) throws Exception {
        OkHttpClient client = new OkHttpClient();
        Request req = new Request.Builder().url(baseUrl + url).delete().build();
        Response res = client.newCall(req).execute();
        return res.body().string();
    }
}
