from django.shortcuts import render
from skills.models import UserSkill


def skill_search(request):
    query = request.GET.get('skill')
    results = []

    if query:
        results = UserSkill.objects.filter(
            skill__name__icontains=query
        )

    return render(request, "search/search.html", {
        "results": results,
        "query": query
    })
