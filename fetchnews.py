import json
import requests


def fetch_topstories():
    url_base = 'https://hacker-news.firebaseio.com/v0'
    url_tops = url_base + '/topstories.json'
    url_item = url_base + '/item/{0}.json'

    res = requests.get(url_tops)
    if res.status_code != 200:
        print('status code:', res.status_code)
        print(res.text)
        return []
    topstories = res.json()
    print(f'fetched {len(topstories)} stories')
    stories = []
    count = 0
    for story_id in topstories[:200]:
        res = requests.get(url_item.format(story_id))
        stories.append(res.json())
        count += 1
        if count % 50 == 0:
            print(f'{count} of {len(topstories)} done...')
    return stories


def write_stories(stories):
    for story in stories:
        with open('./data/{}.json'.format(story['id']), mode='w') as f:
            json.dump(story, f, indent=4)


def post_stories(stories):
    def convert(x):
        return 'item_id' if x == 'id' else x
    columns = ['id', 'title', 'by', 'url', 'score', 'time']
    url = 'http://127.0.0.1:8000/api/stories/'
    for story in stories:
        item = {convert(key): val for key, val in story.items() if key in columns}
        _ = requests.post(url, json.dumps(item), headers={
            'Content-Type': 'application/json'
        })


def main():
    tops = fetch_topstories()
    write_stories(tops)
    post_stories(tops)


if __name__ == '__main__':
    main()
